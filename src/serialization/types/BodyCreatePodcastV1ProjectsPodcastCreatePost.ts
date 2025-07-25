/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import { BodyCreatePodcastV1ProjectsPodcastCreatePostMode } from "./BodyCreatePodcastV1ProjectsPodcastCreatePostMode";
import { BodyCreatePodcastV1ProjectsPodcastCreatePostSource } from "./BodyCreatePodcastV1ProjectsPodcastCreatePostSource";
import { BodyCreatePodcastV1ProjectsPodcastCreatePostQualityPreset } from "./BodyCreatePodcastV1ProjectsPodcastCreatePostQualityPreset";
import { BodyCreatePodcastV1ProjectsPodcastCreatePostDurationScale } from "./BodyCreatePodcastV1ProjectsPodcastCreatePostDurationScale";

export const BodyCreatePodcastV1ProjectsPodcastCreatePost: core.serialization.ObjectSchema<
    serializers.BodyCreatePodcastV1ProjectsPodcastCreatePost.Raw,
    ElevenLabs.BodyCreatePodcastV1ProjectsPodcastCreatePost
> = core.serialization.object({
    modelId: core.serialization.property("model_id", core.serialization.string()),
    mode: BodyCreatePodcastV1ProjectsPodcastCreatePostMode,
    source: BodyCreatePodcastV1ProjectsPodcastCreatePostSource,
    qualityPreset: core.serialization.property(
        "quality_preset",
        BodyCreatePodcastV1ProjectsPodcastCreatePostQualityPreset.optional(),
    ),
    durationScale: core.serialization.property(
        "duration_scale",
        BodyCreatePodcastV1ProjectsPodcastCreatePostDurationScale.optional(),
    ),
    language: core.serialization.string().optional(),
    intro: core.serialization.string().optional(),
    outro: core.serialization.string().optional(),
    instructionsPrompt: core.serialization.property("instructions_prompt", core.serialization.string().optional()),
    highlights: core.serialization.list(core.serialization.string()).optional(),
    callbackUrl: core.serialization.property("callback_url", core.serialization.string().optional()),
});

export declare namespace BodyCreatePodcastV1ProjectsPodcastCreatePost {
    export interface Raw {
        model_id: string;
        mode: BodyCreatePodcastV1ProjectsPodcastCreatePostMode.Raw;
        source: BodyCreatePodcastV1ProjectsPodcastCreatePostSource.Raw;
        quality_preset?: BodyCreatePodcastV1ProjectsPodcastCreatePostQualityPreset.Raw | null;
        duration_scale?: BodyCreatePodcastV1ProjectsPodcastCreatePostDurationScale.Raw | null;
        language?: string | null;
        intro?: string | null;
        outro?: string | null;
        instructions_prompt?: string | null;
        highlights?: string[] | null;
        callback_url?: string | null;
    }
}
