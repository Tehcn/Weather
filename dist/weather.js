var CloudCover;
(function (CloudCover) {
    CloudCover[CloudCover["CLEAR"] = 0] = "CLEAR";
    CloudCover[CloudCover["PARTLY"] = 1] = "PARTLY";
    CloudCover[CloudCover["MOSTLY"] = 2] = "MOSTLY";
    CloudCover[CloudCover["OVERCAST"] = 3] = "OVERCAST";
})(CloudCover || (CloudCover = {}));
// https://scijinks.goc/clouds
var CloudType;
(function (CloudType) {
    CloudType[CloudType["CIRRUS"] = 0] = "CIRRUS";
    CloudType[CloudType["CIRROSTRATUS"] = 1] = "CIRROSTRATUS";
    CloudType[CloudType["CIRROCUMULUS"] = 2] = "CIRROCUMULUS";
    CloudType[CloudType["ALTOCUMULUS"] = 3] = "ALTOCUMULUS";
    CloudType[CloudType["ALTOSTRATUS"] = 4] = "ALTOSTRATUS";
    CloudType[CloudType["NIMBOSTRATUS"] = 5] = "NIMBOSTRATUS";
    CloudType[CloudType["CUMULUS"] = 6] = "CUMULUS";
    CloudType[CloudType["STRATUS"] = 7] = "STRATUS";
    CloudType[CloudType["CUMULONIMBUS"] = 8] = "CUMULONIMBUS";
    CloudType[CloudType["STRATOCUMULUS"] = 9] = "STRATOCUMULUS";
    CloudType[CloudType["SPECIAL"] = 10] = "SPECIAL";
})(CloudType || (CloudType = {}));
var CloudTypeSpecial;
(function (CloudTypeSpecial) {
    CloudTypeSpecial[CloudTypeSpecial["CONTRAILS"] = 0] = "CONTRAILS";
    CloudTypeSpecial[CloudTypeSpecial["MAMMATUS"] = 1] = "MAMMATUS";
    CloudTypeSpecial[CloudTypeSpecial["OROGRAPHIC"] = 2] = "OROGRAPHIC";
    CloudTypeSpecial[CloudTypeSpecial["LENTICULAR"] = 3] = "LENTICULAR";
})(CloudTypeSpecial || (CloudTypeSpecial = {}));
var PrecipitationType;
(function (PrecipitationType) {
    PrecipitationType[PrecipitationType["RAIN"] = 0] = "RAIN";
    PrecipitationType[PrecipitationType["SNOW"] = 1] = "SNOW";
    PrecipitationType[PrecipitationType["SLEET"] = 2] = "SLEET";
    PrecipitationType[PrecipitationType["HAIL"] = 3] = "HAIL";
})(PrecipitationType || (PrecipitationType = {}));
var Intensity;
(function (Intensity) {
    Intensity[Intensity["WEAK"] = 0] = "WEAK";
    Intensity[Intensity["MILD"] = 1] = "MILD";
    Intensity[Intensity["STRONG"] = 2] = "STRONG";
})(Intensity || (Intensity = {}));
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["NORTHEAST"] = 1] = "NORTHEAST";
    Direction[Direction["NORTHWEST"] = 2] = "NORTHWEST";
    Direction[Direction["EAST"] = 3] = "EAST";
    Direction[Direction["SOUTH"] = 4] = "SOUTH";
    Direction[Direction["SOUTEAST"] = 5] = "SOUTEAST";
    Direction[Direction["SOUTHWEST"] = 6] = "SOUTHWEST";
    Direction[Direction["WEST"] = 7] = "WEST";
})(Direction || (Direction = {}));
var SevereStorm;
(function (SevereStorm) {
    SevereStorm[SevereStorm["TORNADO"] = 0] = "TORNADO";
    SevereStorm[SevereStorm["TSUNAMI"] = 1] = "TSUNAMI";
    SevereStorm[SevereStorm["HURRICANE"] = 2] = "HURRICANE";
    SevereStorm[SevereStorm["DEPRESSION"] = 3] = "DEPRESSION";
    SevereStorm[SevereStorm["WILDFIRE"] = 4] = "WILDFIRE";
})(SevereStorm || (SevereStorm = {}));
class Wind {
    constructor(speed, direction) {
        this.speed = speed;
        this.direction = direction;
    }
}
class Precipitation {
    constructor(type, intensity) {
        this.type = type;
        this.intensity = intensity;
    }
}
class Cloud {
    constructor(cover, type) {
        this.cover = cover;
        this.type = type;
    }
}
class Weather {
    constructor(clouds, wind, location, precipitation, severe) {
        this.clouds = clouds;
        this.wind = wind;
        this.location = location;
        if (precipitation) {
            this.precipitation = precipitation;
        }
        if (severe) {
            this.severe = severe;
        }
    }
}
export { Weather, Wind, Precipitation, Cloud, CloudCover, CloudType, CloudTypeSpecial, SevereStorm, Direction, Intensity };
