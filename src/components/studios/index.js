import React from 'react';

import HighRideSlider from './high-ride-slider';
import ViberRideSlider from './vibe-ride-slider';
import CityCycleSlider from './city-cycle-slider';
import PrimeCycleSlider from './PrimeCycleSlider';

const STUDIOS = {
    HIGH_RIDE: 'highRide',
    VIBE_RIDE: 'vibeRide',
    CITY_CYCLE: 'cityCycle',
    PRIME_CYCLE: 'primeCycle'
}

const StudioSlider = ({ partnerId }) => {
    switch (partnerId) {
        case STUDIOS.HIGH_RIDE:
            return <HighRideSlider />;
        case STUDIOS.VIBE_RIDE:
            return <ViberRideSlider />;
        case STUDIOS.CITY_CYCLE:
            return <CityCycleSlider />;
                case STUDIOS.PRIME_CYCLE:
            return <PrimeCycleSlider />;
        default:
            return <HighRideSlider />
    }
}

export default StudioSlider;