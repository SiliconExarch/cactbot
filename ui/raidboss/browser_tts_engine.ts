import * as googleTTS from 'google-tts-api';

import { Lang } from '../../resources/languages';

const TTSEngineType = {
  SpeechSynthesis: 0,
  GoogleTTS: 1,
};

interface TTSItem {
  play: () => void;
}

class SpeechTTSItem implements TTSItem {
  readonly text: string;
  readonly item: SpeechSynthesisUtterance;

  constructor(text: string, lang?: string, voice?: SpeechSynthesisVoice) {
    this.text = text;
    this.item = new SpeechSynthesisUtterance(text);
    if (lang !== undefined)
      this.item.lang = lang;
    if (voice)
      this.item.voice = voice;
  }

  play() {
    window.speechSynthesis.speak(this.item);
  }
}

class GoogleTTSItem implements TTSItem {
  readonly text: string;
  readonly lang: string;
  private readonly item: HTMLAudioElement | null = null;

  constructor(text: string, lang: string) {
    this.text = text;
    this.lang = lang;
    const audio = document.createElement('audio');
    const url = googleTTS.getAudioUrl(text, { lang: lang });
    audio.src = url;
    document.body.appendChild(audio);
    this.item = audio;
  }

  play() {
    if (this.item)
      void this.item.play();
  }
}

type TTSItemDictionary = {
  [key: string]: TTSItem;
};

export default class BrowserTTSEngine {
  readonly ttsItems: TTSItemDictionary = {};
  private readonly engineType = TTSEngineType.SpeechSynthesis;
  private readonly googleTTSLang: string;
  private speechLang?: string;
  private speechVoice?: SpeechSynthesisVoice;
  private initializeAttempts = 0;

  constructor(private cactbotLang: Lang, private isRemote: boolean) {
    this.googleTTSLang = cactbotLang === 'cn' ? 'zh' : cactbotLang;
    if (!isRemote) {
      this.engineType = TTSEngineType.GoogleTTS;
      console.info('BrowserTTS info: running locally in Google TTS mode');
    } else if (window.speechSynthesis !== undefined) {
      // https://bugs.chromium.org/p/chromium/issues/detail?id=334847
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => this.initializeVoice();
    } else
      console.error('BrowserTTS error: no browser support for window.speechSynthesis');
  }

  initializeVoice(): boolean {
    if (!this.isRemote)
      return true;
    if (window.speechSynthesis === undefined)
      return false;
    if (this.speechVoice !== undefined)
      return true;
    if (this.initializeAttempts > 5)
      return false;
    this.initializeAttempts++;

    const cactbotLangToSpeechLang = {
      en: 'en-US',
      de: 'de-DE',
      fr: 'fr-FR',
      ja: 'ja-JP',
      // TODO: maybe need to provide an option of zh-CN, zh-HK, zh-TW?
      cn: 'zh-CN',
      ko: 'ko-KR',
    };

    // figure out what TTS voice type we need
    const speechLang = cactbotLangToSpeechLang[this.cactbotLang];
    const voice = window.speechSynthesis.getVoices().find((voice) =>
      voice.lang.replaceAll('_', '-') === speechLang
    );
    if (voice) {
      this.speechLang = speechLang;
      this.speechVoice = voice;
      window.speechSynthesis.onvoiceschanged = null;
      return true;
    }

    console.error('BrowserTTS error: could not find voice');
    return false;
  }

  play(text: string): void {
    // TODO: try to address a report of the constructor not finding voices
    // by lazily looking later.
    if (!this.initializeVoice())
      return;

    try {
      const ttsItem = this.ttsItems[text];
      ttsItem ? ttsItem.play() : this.playTTS(text);
    } catch (e) {
      console.error('Exception performing TTS', e);
    }
  }

  playTTS(text: string): void {
    switch (this.engineType) {
      case TTSEngineType.SpeechSynthesis:
        this.playSpeechTTS(text);
        break;
      case TTSEngineType.GoogleTTS:
        this.playGoogleTTS(text);
        break;
    }
  }

  playSpeechTTS(text: string): void {
    const ttsItem = new SpeechTTSItem(text, this.speechLang, this.speechVoice);
    this.ttsItems[text] = ttsItem;
    ttsItem.play();
  }

  playGoogleTTS(text: string): void {
    const ttsItem = new GoogleTTSItem(text, this.googleTTSLang);
    this.ttsItems[text] = ttsItem;
    ttsItem.play();
  }
}
