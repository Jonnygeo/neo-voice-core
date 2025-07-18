/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ElevenLabs from "../../api/index";
import * as core from "../../core";

export const ProjectExtendedResponseModelSourceType: core.serialization.Schema<
    serializers.ProjectExtendedResponseModelSourceType.Raw,
    ElevenLabs.ProjectExtendedResponseModelSourceType
> = core.serialization.enum_(["blank", "book", "article", "genfm", "video"]);

export declare namespace ProjectExtendedResponseModelSourceType {
    export type Raw = "blank" | "book" | "article" | "genfm" | "video";
}
