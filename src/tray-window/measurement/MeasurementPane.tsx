import * as React from 'react';

import { IAirlyCurrentMeasurement } from '../../airly';
import { formatters, Measurement } from './Measurement';
import { Unit } from './MeasurementReadingUnit';

interface IMeasurementPaneProps {
  measurement?: IAirlyCurrentMeasurement;
}

const MeasurementPane = ({ measurement }: IMeasurementPaneProps) => {
  return (
    <div className="measurement-pane">
      <Measurement
        description="PM1"
        unit={Unit.PM}
        reading={measurement.pm1}
        formatter={formatters.significant}
      />
      <Measurement
        description="PM2.5"
        unit={Unit.PM}
        reading={measurement.pm25}
        norm={25}
        formatter={formatters.significant}
      />
      <Measurement
        description="PM10"
        unit={Unit.PM}
        reading={measurement.pm10}
        norm={50}
        formatter={formatters.significant}
      />
      <Measurement
        description="Temperature"
        unit={Unit.TEMP_C}
        reading={measurement.temperature}
        formatter={formatters.toFixed2}
      />
      <Measurement
        description="Pressure"
        unit={Unit.PRESSURE_PA}
        reading={measurement.pressure / 100}
        formatter={formatters.toFixed1}
      />
      <Measurement
        description="Humidity"
        unit={Unit.PERCENT}
        reading={measurement.humidity}
        formatter={formatters.toFixed2}
      />
    </div>
  );
};

export default MeasurementPane;
