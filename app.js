function calculate() {
  const size = parseFloat(document.getElementById("size").value);
  const entry = parseFloat(document.getElementById("entry").value);
  const exit = parseFloat(document.getElementById("exit").value);
  const lev = parseFloat(document.getElementById("lev").value);
  const funding = parseFloat(document.getElementById("funding").value);

  if (!size || !entry || !exit || !lev) {
    alert("Fill all fields");
    return;
  }

  // PnL
  const pnl = (exit - entry) * (size / entry);
  document.getElementById("pnl").innerText = "$" + pnl.toFixed(2);

  // ROE
  const roe = (pnl / (size / lev)) * 100;
  document.getElementById("roe").innerText = roe.toFixed(2) + "%";

  // Liquidation price (approx)
  const liq = entry - (entry / lev) * 0.9;
  document.getElementById("liq").innerText = liq.toFixed(2);

  // Funding Fee
  const fundingFee = (size * (funding / 100));
  document.getElementById("fundingFee").innerText = "$" + fundingFee.toFixed(2);
}
