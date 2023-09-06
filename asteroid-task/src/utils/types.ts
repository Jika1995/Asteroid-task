export type Asteroid = {
    links: {
        self: string;
    },
    id: string,
    neo_reference_id: string,
    name: string,
    nasa_jpl_url: string,
    absolute_magnitude_h: number,
    estimated_diameter: {
        kilometers: Diameter,
        meters: Diameter,
        miles: Diameter,
        feet: Diameter,
    },
    is_potentially_hazardous_asteroid: boolean,
    close_approach_data: ApproachData[],
    is_sentry_object: false
}

export type Diameter = {
    estimated_diameter_min: number,
    estimated_diameter_max: number
}

export type Velocity = {
    kilometers_per_second: string,
    kilometers_per_hour: string,
    miles_per_hour: string
}

export type Distance = {
    astronomical: string,
    lunar: string,
    kilometers: string,
    miles: string
}

export type ApproachData = {

    close_approach_date: string,
    close_approach_date_full: string,
    epoch_date_close_approach: number,
    relative_velocity: Velocity,
    miss_distance: Distance,
    orbiting_body: string

}

export type NearEarthObject = {
    [date: string]: Asteroid[]
}