# RadarScopeJS 🔭

RadarScopeJS is an open-source JavaScript library for creating dynamic and customizable radar charts. With support for multiple datasets and adjustable scales, RadarScopeJS makes it easy to bring your data to life with stunning visuals.

![npm downloads](https://img.shields.io/npm/dw/radar-scope-js?style=flat-square)

![package version](https://img.shields.io/npm/v/radar-scope-js?style=flat-square)

## Features 🚀

- Support for multiple datasets
- Customizable scales
- Dynamic and responsive charts
- Built with Chart.js

## Getting Started 🚀

### Installation

To install RadarScopeJS, simply run the following command:

```
npm install radar-scope-js
```

### Usage

To use RadarScopeJS in your project, simply import the library into your JavaScript file(s) where you want to use it:

```javascript
import { createRadarChart } from "radar-scope-js";
```

Then, you can use the library to create a radar chart, like this:

```html
<div id="radar-chart-container"></div>

<script>
  import { createRadarChart } from "radar-scope-js";

  const data = {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: [65, 59, 90, 81, 56, 55],
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: [28, 48, 40, 19, 96, 27],
      },
    ],
  };

  const options = {};

  const chartContainer = createRadarChart(data, options);
  document.getElementById("radar-chart-container").appendChild(chartContainer);
</script>
```

For more information on how to use RadarScopeJS, please see the documentation and examples included with the library.

## Support and Contributions 💪

I welcome contributions and support from the community! If you're interested in contributing to RadarScopeJS, please do so!😀

If you need help with the library, you can open an issue on the [GitHub repository](https://github.com/bcostaaa01/radar-scope-js).

## License 📜

RadarScopeJS is open-source software licensed under the [ISC License](LICENSE).
