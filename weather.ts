enum CloudCover {
    CLEAR,
    PARTLY,
    MOSTLY,
    OVERCAST
}

// https://scijinks.goc/clouds

enum CloudType {
    CIRRUS,
    CIRROSTRATUS,
    CIRROCUMULUS,
    ALTOCUMULUS,
    ALTOSTRATUS,
    NIMBOSTRATUS,
    CUMULUS,
    STRATUS,
    CUMULONIMBUS,
    STRATOCUMULUS,
    SPECIAL
}

enum CloudTypeSpecial {
    CONTRAILS,
    MAMMATUS,
    OROGRAPHIC,
    LENTICULAR
}

enum PrecipitationType {
    RAIN,
    SNOW,
    SLEET,
    HAIL
}

enum Intensity {
    WEAK,
    MILD,
    STRONG
}

enum Direction {
    NORTH,
    NORTHEAST,
    NORTHWEST,
    EAST,
    SOUTH,
    SOUTEAST,
    SOUTHWEST,
    WEST
}

enum SevereStorm {
    TORNADO,
    TSUNAMI,
    HURRICANE,
    DEPRESSION,
    WILDFIRE
}

type WLocation = {
    Country: String,
    State: String,
    City: String
}

class Wind {

    public speed: Number;
    public direction: Direction;

    constructor(speed: Number, direction: Direction) {
        this.speed = speed;
        this.direction = direction;
    }

}

class Precipitation {

    public type: PrecipitationType;
    public intensity: Intensity;

    constructor(type: PrecipitationType, intensity: Intensity) {
        this.type = type;
        this.intensity = intensity;
    }

}

class Cloud {

    public cover: CloudCover;
    public type: CloudType;

    constructor(cover: CloudCover, type: CloudType) {
        this.cover = cover;
        this.type = type;
    }
}

class Weather {

    public clouds: Cloud;
    public wind: Wind;
    public location: WLocation;
    public precipitation: Precipitation;
    public severe: SevereStorm;

    constructor(clouds: Cloud, wind: Wind, location: WLocation, precipitation?: Precipitation, severe?: SevereStorm) {
        this.clouds = clouds;
        this.wind = wind;
        this.location = location;
        if(precipitation) {
            this.precipitation = precipitation;
        }
        if(severe) {
            this.severe = severe;
        }
    }

}

export { Weather, Wind, Precipitation, Cloud, CloudCover, CloudType, CloudTypeSpecial, WLocation, SevereStorm, Direction, Intensity}