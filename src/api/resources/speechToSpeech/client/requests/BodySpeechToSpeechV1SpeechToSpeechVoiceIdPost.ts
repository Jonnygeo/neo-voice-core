/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as fs from "fs";
import * as ElevenLabs from "../../../../index";
import * as core from "../../../../../core";

/**
 * @example
 *     {
 *         audio: fs.createReadStream("/path/to/your/file"),
 *         outputFormat: "mp3_44100_128",
 *         modelId: "eleven_multilingual_sts_v2"
 *     }
 */
export interface BodySpeechToSpeechV1SpeechToSpeechVoiceIdPost {
    /**
     * When enable_logging is set to false zero retention mode will be used for the request. This will mean history features are unavailable for this request, including request stitching. Zero retention mode may only be used by enterprise customers.
     */
    enableLogging?: boolean;
    /**
     * You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model. Possible values:
     * 0 - default mode (no latency optimizations)
     * 1 - normal latency optimizations (about 50% of possible latency improvement of option 3)
     * 2 - strong latency optimizations (about 75% of possible latency improvement of option 3)
     * 3 - max latency optimizations
     * 4 - max latency optimizations, but also with text normalizer turned off for even more latency savings (best latency, but can mispronounce eg numbers and dates).
     *
     * Defaults to None.
     */
    optimizeStreamingLatency?: number;
    /**
     * Output format of the generated audio. Formatted as codec_sample_rate_bitrate. So an mp3 with 22.05kHz sample rate at 32kbs is represented as mp3_22050_32. MP3 with 192kbps bitrate requires you to be subscribed to Creator tier or above. PCM with 44.1kHz sample rate requires you to be subscribed to Pro tier or above. Note that the μ-law format (sometimes written mu-law, often approximated as u-law) is commonly used for Twilio audio inputs.
     */
    outputFormat?: ElevenLabs.SpeechToSpeechConvertRequestOutputFormat;
    audio: core.FileLike;
    /** Identifier of the model that will be used, you can query them using GET /v1/models. The model needs to have support for speech to speech, you can check this using the can_do_voice_conversion property. */
    modelId?: string;
    /** Voice settings overriding stored settings for the given voice. They are applied only on the given request. Needs to be send as a JSON encoded string. */
    voiceSettings?: string;
    /** If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result. Determinism is not guaranteed. Must be integer between 0 and 4294967295. */
    seed?: number;
    /** If set, will remove the background noise from your audio input using our audio isolation model. Only applies to Voice Changer. */
    removeBackgroundNoise?: boolean;
    /** The format of input audio. Options are 'pcm_s16le_16' or 'other' For `pcm_s16le_16`, the input audio must be 16-bit PCM at a 16kHz sample rate, single channel (mono), and little-endian byte order. Latency will be lower than with passing an encoded waveform. */
    fileFormat?: ElevenLabs.SpeechToSpeechConvertRequestFileFormat;
}
