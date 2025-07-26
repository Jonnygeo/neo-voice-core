# 🔊 Neo Voice Core

**Neo Voice Core** is the voice module for the NeoLegacy system. It enables users to record, upload, and store voice messages tied to memory, emotion, or spiritual guidance. Messages can be saved privately, linked to a child, or scheduled for future delivery.

This module is part of NeoLegacy’s emotional memory system — where **voice becomes presence**, and **presence becomes legacy**.

---

## 🎯 Core Purpose

Neo Voice Core is built to:
- 🎙 Record audio in-browser (desktop or mobile)
- 🔐 Upload to secure or decentralized storage (Firebase / Arweave)
- ✍️ Transcribe audio (optional via Whisper or Google STT)
- 🗓 Tag with delivery triggers (immediate, birthday, posthumous)
- 🧒 Link messages to a vault, a child profile, or a spiritual timeline

---

## 🧠 Use Cases

- Final blessings or goodbye messages
- Daily affirmations or meditative voice loops
- Milestone moments (birthdays, graduations, etc.)
- Spiritual teachings or moral guidance
- Long-term parenting voice messages (scheduled over years)

---

## 🔧 Features

- Real-time audio recording via microphone
- Firebase or Bundlr/Arweave-based storage
- Metadata tagging (recipient, delivery time, event)
- Optional transcription via Whisper or Google STT
- Optional ElevenLabs TTS synthesis for cloned voice playback
- Fully modular — designed to integrate or run standalone

---

## 🧩 System Integration

Neo Voice Core can operate solo or integrate with:
- **NeoLegacy Vault** – for encrypted memory storage
- **Message Delivery Engine** – to schedule timed or posthumous release
- **NeoLegacy Dashboard** – for UI access, linking, and playback

---

## 🧪 Tech Stack

- React frontend / UI module
- WebRTC or mic-recorder-to-mp3 (audio capture)
- Firebase Storage + Firestore (cloud)
- Bundlr + Arweave (decentralized, permanent)
- Whisper / Google Speech-to-Text (transcription)
- ElevenLabs (optional voice synthesis)

---

## 📁 Example Folder Structure
neo-voice-core/
├── components/
│ └── VoiceRecorder.jsx
├── services/
│ ├── firebaseUpload.js
│ ├── arweaveUpload.js
│ └── transcribeAudio.js
├── hooks/
│ └── useAudioRecorder.js
├── utils/
│ └── deliveryScheduler.js
├── index.js
├── README.md

yaml
Copy
Edit

---

## ⚠️ Notes

Neo Voice Core is a part of the broader NeoLegacy emotional and ethical memory platform. While it can stand alone, its deeper purpose comes alive when connected to a legacy vault, time-aware delivery engine, and personalized moral archive.

This is **not just a voice recorder** — it’s a tool to help you say what needs to be said, even when you're no longer around to say it.

---

> "Speak now, be remembered forever."
> — NeoLegacy Team

