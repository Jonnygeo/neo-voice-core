/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Duration of the generated podcast. Must be one of:
 * short - produces podcasts shorter than 3 minutes.
 * default - produces podcasts roughly between 3-7 minutes.
 * long - produces podcasts longer than 7 minutes.
 */
export type BodyCreatePodcastV1ProjectsPodcastCreatePostDurationScale = "short" | "default" | "long";
export const BodyCreatePodcastV1ProjectsPodcastCreatePostDurationScale = {
    Short: "short",
    Default: "default",
    Long: "long",
} as const;
