import React, { Component } from "react";


class Sun extends Component {
  // these are the initial values, and perhaps the values that should be used for the zoomout function
  
  render() {
    
    

   const planets = [
    { Name: 'MERCURY',
      Mass: '0.0553',
      Diameter: '0.383',
      Density: '0.984',
      Gravity: '0.378',
      EscapeVelocity: '0.384',
      RotationPeriod: '58.8',
      LengthofDay: '175.9',
      DistancefromSun: '0.387',
      Perihelion: '0.313',
      Aphelion: '0.459',
      OrbitalPeriod: '0.241',
      OrbitalVelocity: '1.59',
      OrbitalEccentricity: '12.3',
      ObliquitytoOrbit: '0.001',
      SurfacePressure: '0',
      NumberofMoons: '0',
      RingSystem: 'No',
      GlobalMagneticField: 'Yes',
      Color: '#9e999b' },
   
    { Name: 'VENUS',
      Mass: '0.815',
      Diameter: '0.949',
      Density: '0.951',
      Gravity: '0.907',
      EscapeVelocity: '0.926',
      RotationPeriod: '-244',
      LengthofDay: '116.8',
      DistancefromSun: '0.723',
      Perihelion: '0.731',
      Aphelion: '0.716',
      OrbitalPeriod: '0.615',
      OrbitalVelocity: '1.18',
      OrbitalEccentricity: '0.401',
      ObliquitytoOrbit: '0.113*',
      SurfacePressure: '92',
      NumberofMoons: '0',
      RingSystem: 'No',
      GlobalMagneticField: 'No',
      Color: '#DE5F25' },
   
    { Name: 'EARTH',
      Mass: '1',
      Diameter: '1',
      Density: '1',
      Gravity: '1',
      EscapeVelocity: '1',
      RotationPeriod: '1',
      LengthofDay: '1',
      DistancefromSun: '1',
      Perihelion: '1',
      Aphelion: '1',
      OrbitalPeriod: '1',
      OrbitalVelocity: '1',
      OrbitalEccentricity: '1',
      ObliquitytoOrbit: '1',
      SurfacePressure: '1',
      NumberofMoons: '1',
      RingSystem: 'No',
      GlobalMagneticField: 'Yes',
      Color: '#182A61' },
   
    { Name: 'MARS',
      Mass: '0.107',
      Diameter: '0.532',
      Density: '0.713',
      Gravity: '0.377',
      EscapeVelocity: '0.450',
      RotationPeriod: '1.03',
      LengthofDay: '1.03',
      DistancefromSun: '1.52',
      Perihelion: '1.41',
      Aphelion: '1.64',
      OrbitalPeriod: '1.88',
      OrbitalVelocity: '0.808',
      OrbitalEccentricity: '5.60',
      ObliquitytoOrbit: '1.07',
      SurfacePressure: '0.01',
      NumberofMoons: '2',
      RingSystem: 'No',
      GlobalMagneticField: 'No',
      Color: '#FDBF01' },
   
    { Name: 'JUPITER',
      Mass: '317.8',
      Diameter: '11.21',
      Density: '0.240',
      Gravity: '2.36',
      EscapeVelocity: '5.32',
      RotationPeriod: '0.415',
      LengthofDay: '0.414',
      DistancefromSun: '3.20',
      Perihelion: '5.03',
      Aphelion: '5.37',
      OrbitalPeriod: '11.9',
      OrbitalVelocity: '0.439',
      OrbitalEccentricity: '2.93',
      ObliquitytoOrbit: '0.134',
      SurfacePressure: 'Unknown*',
      NumberofMoons: '79',
      RingSystem: 'Yes',
      GlobalMagneticField: 'Yes',
      Color: '#C1844D' },
   
    { Name: 'SATURN',
      Mass: '95.2',
      Diameter: '9.45',
      Density: '0.125',
      Gravity: '0.916',
      EscapeVelocity: '3.17',
      RotationPeriod: '0.445',
      LengthofDay: '0.444',
      DistancefromSun: '6.58',
      Perihelion: '9.20',
      Aphelion: '9.96',
      OrbitalPeriod: '29.4',
      OrbitalVelocity: '0.325',
      OrbitalEccentricity: '3.38',
      ObliquitytoOrbit: '1.14',
      SurfacePressure: 'Unknown*',
      NumberofMoons: '62',
      RingSystem: 'Yes',
      GlobalMagneticField: 'Yes',
      Color: '#E0CDAD' },
   
    { Name: 'URANUS',
      Mass: '14.5',
      Diameter: '4.01',
      Density: '0.230',
      Gravity: '0.889',
      EscapeVelocity: '1.90',
      RotationPeriod: '-0.720',
      LengthofDay: '0.718',
      DistancefromSun: '10.20',
      Perihelion: '18.64',
      Aphelion: '19.75',
      OrbitalPeriod: '83.7',
      OrbitalVelocity: '0.228',
      OrbitalEccentricity: '2.74',
      ObliquitytoOrbit: '4.17*',
      SurfacePressure: 'Unknown*',
      NumberofMoons: '27',
      RingSystem: 'Yes',
      GlobalMagneticField: 'Yes',
      Color: '#9FC4CA' },
   
    { Name: 'NEPTUNE',
      Mass: '17.1',
      Diameter: '3.88',
      Density: '0.297',
      Gravity: '1.12',
      EscapeVelocity: '2.10',
      RotationPeriod: '0.673',
      LengthofDay: '0.671',
      DistancefromSun: '14.05',
      Perihelion: '30.22',
      Aphelion: '29.89',
      OrbitalPeriod: '163.7',
      OrbitalVelocity: '0.182',
      OrbitalEccentricity: '0.677',
      ObliquitytoOrbit: '1.21',
      SurfacePressure: 'Unknown*',
      NumberofMoons: '14',
      RingSystem: 'Yes',
      GlobalMagneticField: 'Yes',
      Color: '#3454DF' },
   
    { Name: 'PLUTO',
      Mass: '0.0025',
      Diameter: '0.186',
      Density: '0.380',
      Gravity: '0.071',
      EscapeVelocity: '0.116',
      RotationPeriod: '6.41',
      LengthofDay: '6.39',
      DistancefromSun: '20.48',
      Perihelion: '30.16',
      Aphelion: '48.49',
      OrbitalPeriod: '247.9',
      OrbitalVelocity: '0.157',
      OrbitalEccentricity: '14.6',
      ObliquitytoOrbit: '2.45*',
      SurfacePressure: '0.00001',
      NumberofMoons: '5',
      RingSystem: 'No',
      GlobalMagneticField: 'Unknown',
      Color: '#7C6241' } ]
   
      
      const computedEarth = {
      r: planets[2].Diameter/2 * 15,
      rx: planets[2].DistancefromSun * 700,
      ry: planets[2].DistancefromSun * 700 *.3,
      orbitTime: planets[2].OrbitalPeriod * 60
      
    }

    const sunR = 120

    // function getRandomColor() {
    //   var letters = '0123456789ABCDEF';
    //   var color = '#';
    //   for (var i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    //   }
    //   return color;
    // }

    return (
      
      <svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-3000 -2000 6500 4000" >
       
        <defs>
        
        <filter id="sunFilter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
        <filter id="planetFilter">
          <feGaussianBlur in="SourceGraphic" stdDeviation=".7" />
        </filter>
        </defs>
        {/* sun */}
        <g transform={`translate(${this.props.x} ${this.props.y})`}>
        <circle cx={window.innerWidth/2} cy={window.innerHeight/2} r={sunR} fill="#fa3" stroke="none"/>
        <g>
        <ellipse id="planet1Orbit" cx={window.innerWidth/2} cy={window.innerHeight/2} rx={computedEarth.rx} ry={computedEarth.ry} fill="none" stroke="#C8C8C8"/>
        
          <circle ref='earthRef' id="planet1" cx={window.innerWidth/2 - computedEarth.rx} cy={window.innerHeight/2} r={computedEarth.r} fill={planets[2].Color} stroke="none"  >  
        
          <animateMotion begin="0s" dur={`${computedEarth.orbitTime}s`} repeatCount="indefinite" path={`M-0,0a${computedEarth.rx},${computedEarth.ry} 0 1,0 ${computedEarth.rx*2},0a${computedEarth.rx},${computedEarth.ry} 0 1,0 ${-computedEarth.rx*2},0`} />
          </circle>
        </g>
        
        {planets.map((p, index) => (
          
        <g key={index}>
          <ellipse cx={window.innerWidth/2} cy={window.innerHeight/2} rx={computedEarth.rx * Math.sqrt(p.DistancefromSun)} ry={computedEarth.ry * Math.sqrt(p.DistancefromSun)} fill="none" stroke="#C8C8C8"/>
        
          
          <circle cx={window.innerWidth/2 -(computedEarth.rx * Math.sqrt(p.DistancefromSun))} cy={window.innerHeight/2} r={computedEarth.r * p.Diameter} fill={p.Color} stroke="none" style={{filter: 'url(#planetFilter)'}} >  
          <animateMotion begin="0s" dur={`${computedEarth.orbitTime * p.OrbitalPeriod}s`} repeatCount="indefinite" path={`M-0,0a${computedEarth.rx * Math.sqrt(p.DistancefromSun)},${computedEarth.ry * Math.sqrt(p.DistancefromSun)} 0 1,0 ${computedEarth.rx *2 * Math.sqrt(p.DistancefromSun)},0a${computedEarth.rx * Math.sqrt(p.DistancefromSun)},${computedEarth.ry * Math.sqrt(p.DistancefromSun)} 0 1,0 ${-computedEarth.rx*2 * Math.sqrt(p.DistancefromSun)},0`} />
          </circle>
        </g>
        
        
        ))}
        </g>
        
      </svg>
    )
  }

  
}

export default Sun