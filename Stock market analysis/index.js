const stockTable = document.querySelector(".stock-table tbody");
const summarySection = document.querySelector(".summary-section");
const currentStockInfo = document.querySelector(".current-stock-info");
const timeBtn = document.querySelectorAll(".time-btns button");
let stockSummary = [];
let stockMapValues = [];
let companyLabel = "AAPL";
let timeInt = "1mo";
let showDate;
let timestamps;

// const Stocks = [
//   "AAPL",
//   "MSFT",
//   "GOOGL",
//   "AMZN",
//   "PYPL",
//   "TSLA",
//   "JPM",
//   "NVDA",
//   "NFLX",
//   "DIS",
// ];

async function getListSectionData() {
  try {
    const response = await fetch(
      "https://stocksapi-uhe1.onrender.com/api/stocks/getstockstatsdata"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // only returns if response.ok is true
  } catch (error) {
    console.error("Fetch error:", error);
    return null; // optional: return null or handle the error
  }
}

function currentStockInfoUpdate(key, bv, profit) {
  currentStockInfo.innerHTML = `<span>${key}</span>
        <span class="text-green">${profit}%</span>
        <span>$${bv}</span>`;
}

async function listSection() {
  const data = await getListSectionData();
  if (data) {
    Object.keys(data.stocksStatsData[0]).forEach((key) => {
      if (key !== "_id") {
        const { bookValue, profit } = data.stocksStatsData[0][key];

        const row = document.createElement("tr");
        row.classList.add("table-row");
        row.innerHTML = `
          <td class="stock-btn">${key}</td>
          <td>$${bookValue}</td>
          <td style="color: ${
            profit == 0 ? "#ff0000" : "#0ca50c"
          }">${profit}%</td>
        `;
        stockTable.appendChild(row);
        stockSummary.push({ key, bookValue, profit });
      }
    });
  } else {
    console.error("Error found loading the data. No data returned.");
  }
}

listSection();

async function getDetailSectionData() {
  try {
    const response = await fetch(
      "https://stocksapi-uhe1.onrender.com/api/stocks/getstocksprofiledata"
    );
    if (!response.ok) {
      throw new Error("Error loading the data:", response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Data not forund: ", error);
    return null;
  }
}

async function detailSection(companyLabel) {
  const data = await getDetailSectionData();

  if (data) {
    Object.keys(data.stocksProfileData[0]).forEach((key) => {
      const { summary } = data.stocksProfileData[0][key];
      if (key === companyLabel) {
        summarySection.innerHTML = summary;
      }
    });
  } else {
    console.error("Error Loading Details");
  }
}

detailSection("AAPL");
currentStockInfoUpdate("AAPL", "3.953", "0.24493");

function showChart(arr) {
  const trace = {
    x: arr[1],
    y: arr[0],
    customdata: arr[2],
    hovertemplate:
      `<b>${companyLabel}</b><br>` +
      `Value:$ %{x:.2f}<br>` +
      `Date: %{customdata}<extra></extra>`,
    line: {
      color: "#0ca50c", // Green line
      width: 2, // Line thickness (optional)
    },
    marker: {
      color: "#fff", //
    },
    type: "scatter",
  };
  // ${companyLabel}<br>Value:$ %{x:.2f}
  const data = [trace];

  const layout = {
    width: 900,
    height: 400,
    xaxis: {
      showgrid: false, // Remove vertical grid lines
      showticklabels: false, // Hide x-axis labels
      ticks: "", // Remove tick marks
      showline: false, // Remove axis line
      showspikes: true,
      spikemode: "across",
      spikesnap: "cursor",
      showline: false,
      showgrid: false,
      spikedash: "solid",
      spikecolor: "#fff",
      spikethickness: 2,
    },
    yaxis: {
      showgrid: false, // Remove horizontal grid lines
      showticklabels: false, // Hide y-axis labels
      ticks: "", // Remove tick marks
      showline: false, // Remove axis line
    },
    margin: { t: 0, b: 0, l: 0, r: 0 },
    plot_bgcolor: "rgb(28, 28, 100);", // Blue background for plot area
    hoverlabel: {
      align: "top", // aligns the label at the top
      bgcolor: "rgb(28, 28, 100);",
      font: {
        color: "#fff",
      },
    },
  };

  const config = {
    displayModeBar: false, // hides the entire toolbar
  };

  const myDiv = document.getElementById("tester");
  Plotly.newPlot(myDiv, data, layout, config);
}

async function getStocksData() {
  try {
    const response = await fetch(
      "https://stocksapi-uhe1.onrender.com/api/stocks/getstocksdata"
    );
    if (!response.ok) {
      throw new Error("Error loading the data:", response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Data not forund: ", error);
    return null;
  }
}

async function showStatsData(companyLabel, time) {
  const data = await getStocksData();

  if (data) {
    const stocksData = data.stocksData[0]; // 'yourData' should be your full JSON
    const companyData = stocksData[companyLabel][time];
    const values = companyData.value;
    timestamps = companyData.timeStamp;

    showDate = timestamps.map((ts) => new Date(ts * 1000));
    console.log(showDate);

    stockMapValues = [];
    stockMapValues.push(values, timestamps, showDate);
    showChart(stockMapValues);
  } else {
    console.error("Error Loading Details");
  }
}

showStatsData("AAPL", "1mo");
showChart(stockMapValues);

setTimeout(() => {
  const companyBtn = document.querySelectorAll(".stock-btn");

  companyBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      companyLabel = btn.innerHTML;
      stockSummary.forEach((key) => {
        if (key.key === companyLabel) {
          currentStockInfoUpdate(companyLabel, key.bookValue, key.profit);
          showStatsData(companyLabel, "1mo");
        }
      });
      detailSection(companyLabel);
      showChart(stockMapValues);
    });
  });
}, 1000);

timeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML === "1 month") {
      timeInt = "1mo";
    }
    if (btn.innerHTML === "3 month") {
      timeInt = "3mo";
    }
    if (btn.innerHTML === "1 year") {
      timeInt = "1y";
    }
    if (btn.innerHTML === "5 years") {
      timeInt = "5y";
    }

    console.log(companyLabel);
    showStatsData(companyLabel, timeInt);
  });
});
