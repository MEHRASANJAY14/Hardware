<!DOCTYPE html>
<html>
<head>
  <base target="_top">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>MPGB Hardware Data Collection</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f2f6f4;
      color: #222;
    }

    .header {
      background: #006633;
      color: white;
      padding: 18px 15px;
      text-align: center;
    }

    .header h1 {
      margin: 0;
      font-size: 22px;
    }

    .header p {
      margin: 6px 0 0;
      font-size: 14px;
    }

    .container {
      max-width: 850px;
      margin: 20px auto;
      padding: 0 12px;
    }

    .card {
      background: white;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 18px;
      box-shadow: 0 3px 12px rgba(0,0,0,0.08);
    }

    .section-title {
      font-size: 18px;
      font-weight: bold;
      color: #006633;
      border-bottom: 2px solid #e3eee8;
      padding-bottom: 10px;
      margin-bottom: 18px;
    }

    label {
      display: block;
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 14px;
    }

    .required {
      color: red;
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 7px;
      font-size: 15px;
      background: white;
    }

    input:focus,
    select:focus,
    textarea:focus {
      outline: none;
      border-color: #006633;
      box-shadow: 0 0 0 2px rgba(0,102,51,0.1);
    }

    textarea {
      min-height: 80px;
      resize: vertical;
    }

    .row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin-bottom: 15px;
    }

    .field {
      margin-bottom: 15px;
    }

    .branch-name {
      background: #eef7f1;
      font-weight: bold;
      color: #006633;
    }

    .hardware-card {
      border: 1px solid #d8e6dd;
      border-radius: 10px;
      padding: 15px;
      margin-bottom: 15px;
      background: #fbfdfc;
      position: relative;
    }

    .hardware-number {
      font-weight: bold;
      color: #006633;
      margin-bottom: 15px;
    }

    .remove-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #d9534f;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 6px 10px;
      cursor: pointer;
    }

    .add-btn {
      width: 100%;
      background: white;
      color: #006633;
      border: 2px dashed #006633;
      padding: 12px;
      border-radius: 7px;
      font-size: 15px;
      font-weight: bold;
      cursor: pointer;
    }

    .submit-btn {
      width: 100%;
      background: #006633;
      color: white;
      border: none;
      padding: 15px;
      border-radius: 8px;
      font-size: 17px;
      font-weight: bold;
      cursor: pointer;
    }

    .submit-btn:hover {
      background: #004d26;
    }

    .submit-btn:disabled {
      background: #999;
      cursor: not-allowed;
    }

    .success {
      display: none;
      background: #e8f7ed;
      border: 1px solid #9bd2ac;
      color: #126b2e;
      padding: 18px;
      border-radius: 8px;
      text-align: center;
      margin-bottom: 15px;
      font-weight: bold;
    }

    .error {
      display: none;
      background: #fdeaea;
      border: 1px solid #e2a0a0;
      color: #a00000;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 15px;
    }

    .loading {
      display: none;
      text-align: center;
      padding: 15px;
      color: #006633;
      font-weight: bold;
    }

    .footer {
      text-align: center;
      padding: 20px;
      color: #666;
      font-size: 12px;
    }

    @media(max-width: 600px) {

      .row {
        grid-template-columns: 1fr;
        gap: 0;
      }

      .card {
        padding: 15px;
      }

      .header h1 {
        font-size: 19px;
      }

    }
  </style>
</head>

<body>

<div class="header">
  <h1>MPGB - HARDWARE DATA COLLECTION</h1>
  <p>Regional Office Jabalpur</p>
</div>


<div class="container">

  <div id="successBox" class="success"></div>

  <div id="errorBox" class="error"></div>


  <!-- BRANCH DETAILS -->

  <div class="card">

    <div class="section-title">
      Branch Details
    </div>

    <div class="row">

      <div class="field">

        <label>
          SOL ID <span class="required">*</span>
        </label>

        <select id="solId" onchange="branchChanged()">

          <option value="">
            Select SOL ID
          </option>

        </select>

      </div>


      <div class="field">

        <label>
          Branch Name
        </label>

        <input
          type="text"
          id="branchName"
          class="branch-name"
          readonly
          placeholder="Branch name will appear here"
        >

      </div>

    </div>

  </div>


  <!-- HARDWARE -->

  <div class="card">

    <div class="section-title">
      Hardware Details
    </div>

    <div id="hardwareContainer">

    </div>


    <button
      type="button"
      class="add-btn"
      onclick="addHardware()"
    >
      + Add Another Hardware
    </button>

  </div>


  <div class="loading" id="loading">
    Submitting data... Please wait.
  </div>


  <button
    type="button"
    class="submit-btn"
    id="submitBtn"
    onclick="submitData()"
  >
    SUBMIT HARDWARE DATA
  </button>


</div>


<div class="footer">
  MPGB - Regional Office Jabalpur
</div>



<script>

let branches = [];

let hardwareTypes = [];

let conditions = [];

let printerTypes = [];

let hardwareCount = 0;


/* ==========================================
   PAGE LOAD
========================================== */

window.onload = function() {

  google.script.run
    .withSuccessHandler(loadBranches)
    .getBranches();


  google.script.run
    .withSuccessHandler(function(data) {
      hardwareTypes = data;
    })
    .getHardwareTypes();


  google.script.run
    .withSuccessHandler(function(data) {
      conditions = data;
    })
    .getConditions();


  google.script.run
    .withSuccessHandler(function(data) {
      printerTypes = data;
    })
    .getPrinterTypes();


  addHardware();

};



/* ==========================================
   LOAD BRANCHES
========================================== */

function loadBranches(data) {

  branches = data || [];

  const select =
    document.getElementById("solId");


  branches.forEach(function(branch) {

    const option =
      document.createElement("option");

    option.value = branch.solId;

    option.textContent =
      branch.solId + " - " + branch.branchName;

    select.appendChild(option);

  });

}



/* ==========================================
   BRANCH CHANGE
========================================== */

function branchChanged() {

  const solId =
    document.getElementById("solId").value;

  const branchName =
    document.getElementById("branchName");


  branchName.value = "";


  const branch =
    branches.find(function(item) {

      return String(item.solId) ===
             String(solId);

    });


  if (branch) {

    branchName.value =
      branch.branchName;

  }

}



/* ==========================================
   ADD HARDWARE
========================================== */

function addHardware() {

  hardwareCount++;

  const container =
    document.getElementById("hardwareContainer");


  const card =
    document.createElement("div");

  card.className =
    "hardware-card";

  card.id =
    "hardware-" + hardwareCount;


  card.innerHTML = `

    <div class="hardware-number">
      Hardware Item ${hardwareCount}
    </div>

    ${
      hardwareCount > 1
      ?
      `<button
        type="button"
        class="remove-btn"
        onclick="removeHardware(${hardwareCount})">
        Remove
      </button>`
      :
      ""
    }


    <div class="row">

      <div class="field">

        <label>
          Hardware Type <span class="required">*</span>
        </label>

        <select
          class="hardwareType"
          onchange="hardwareTypeChanged(this)"
        >

          <option value="">
            Select Hardware
          </option>

          ${
            hardwareTypes.map(function(type) {

              return `<option value="${type}">
                ${type}
              </option>`;

            }).join("")
          }

        </select>

      </div>


      <div class="field printerSubTypeField"
           style="display:none;">

        <label>
          Printer Type <span class="required">*</span>
        </label>

        <select class="hardwareSubType">

          <option value="">
            Select Printer Type
          </option>

          ${
            printerTypes.map(function(type) {

              return `<option value="${type}">
                ${type}
              </option>`;

            }).join("")
          }

        </select>

      </div>

    </div>


    <div class="row">

      <div class="field">

        <label>
          Make <span class="required">*</span>
        </label>

        <input
          type="text"
          class="make"
          placeholder="Enter Make"
        >

      </div>


      <div class="field">

        <label>
          Model
        </label>

        <input
          type="text"
          class="model"
          placeholder="Enter Model"
        >

      </div>

    </div>


    <div class="row">

      <div class="field">

        <label>
          Serial No. <span class="required">*</span>
        </label>

        <input
          type="text"
          class="serialNo"
          placeholder="Enter Serial Number"
        >

      </div>


      <div class="field">

        <label>
          Condition <span class="required">*</span>
        </label>

        <select class="condition">

          <option value="">
            Select Condition
          </option>

          ${
            conditions.map(function(condition) {

              return `<option value="${condition}">
                ${condition}
              </option>`;

            }).join("")
          }

        </select>

      </div>

    </div>


    <div class="field">

      <label>
        Remarks
      </label>

      <textarea
        class="remarks"
        placeholder="Enter remarks if any"
      ></textarea>

    </div>

  `;


  container.appendChild(card);

}



/* ==========================================
   HARDWARE TYPE CHANGE
========================================== */

function hardwareTypeChanged(select) {

  const card =
    select.closest(".hardware-card");

  const subtypeField =
    card.querySelector(
      ".printerSubTypeField"
    );

  const subtype =
    card.querySelector(
      ".hardwareSubType"
    );


  if (select.value === "Printer") {

    subtypeField.style.display =
      "block";

  } else {

    subtypeField.style.display =
      "none";

    subtype.value = "";

  }

}



/* ==========================================
   REMOVE HARDWARE
========================================== */

function removeHardware(id) {

  const element =
    document.getElementById(
      "hardware-" + id
    );

  if (element) {

    element.remove();

  }

}



/* ==========================================
   SHOW ERROR
========================================== */

function showError(message) {

  const box =
    document.getElementById("errorBox");

  box.innerHTML =
    "⚠️ " + message;

  box.style.display =
    "block";


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}



/* ==========================================
   SHOW SUCCESS
========================================== */

function showSuccess(message) {

  const box =
    document.getElementById("successBox");

  box.innerHTML =
    "✅ " + message;

  box.style.display =
    "block";


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}



/* ==========================================
   SUBMIT DATA
========================================== */

function submitData() {

  document.getElementById(
    "errorBox"
  ).style.display = "none";


  document.getElementById(
    "successBox"
  ).style.display = "none";


  const solId =
    document.getElementById(
      "solId"
    ).value;


  const branchName =
    document.getElementById(
      "branchName"
    ).value;


  if (!solId) {

    showError(
      "Please select SOL ID."
    );

    return;

  }


  if (!branchName) {

    showError(
      "Branch Name is missing."
    );

    return;

  }


  const cards =
    document.querySelectorAll(
      ".hardware-card"
    );


  if (cards.length === 0) {

    showError(
      "Please add at least one hardware item."
    );

    return;

  }


  const hardwareList = [];

  let validationError = "";


  cards.forEach(function(card) {

    if (validationError) {
      return;
    }


    const hardwareType =
      card.querySelector(
        ".hardwareType"
      ).value;


    const hardwareSubType =
      card.querySelector(
        ".hardwareSubType"
      ).value;


    const make =
      card.querySelector(
        ".make"
      ).value.trim();


    const model =
      card.querySelector(
        ".model"
      ).value.trim();


    const serialNo =
      card.querySelector(
        ".serialNo"
      ).value.trim();


    const condition =
      card.querySelector(
        ".condition"
      ).value;


    const remarks =
      card.querySelector(
        ".remarks"
      ).value.trim();


    if (!hardwareType) {

      validationError =
        "Please select Hardware Type.";

      return;

    }


    if (
      hardwareType === "Printer" &&
      !hardwareSubType
    ) {

      validationError =
        "Please select Printer Type.";

      return;

    }


    if (!make) {

      validationError =
        "Please enter Make.";

      return;

    }


    if (!serialNo) {

      validationError =
        "Please enter Serial No.";

      return;

    }


    if (!condition) {

      validationError =
        "Please select Condition.";

      return;

    }


    hardwareList.push({

      solId: solId,

      branchName: branchName,

      hardwareType:
        hardwareType,

      hardwareSubType:
        hardwareSubType,

      make: make,

      model: model,

      serialNo: serialNo,

      condition: condition,

      remarks: remarks

    });

  });


  if (validationError) {

    showError(validationError);

    return;

  }


  /* Disable button */

  const submitBtn =
    document.getElementById(
      "submitBtn"
    );

  submitBtn.disabled = true;

  submitBtn.innerHTML =
    "SUBMITTING...";


  document.getElementById(
    "loading"
  ).style.display = "block";


  saveNextHardware(
    hardwareList,
    0,
    []
  );

}



/* ==========================================
   SAVE HARDWARE ONE BY ONE
========================================== */

function saveNextHardware(
  list,
  index,
  results
) {


  if (index >= list.length) {

    document.getElementById(
      "loading"
    ).style.display = "none";


    document.getElementById(
      "submitBtn"
    ).disabled = false;


    document.getElementById(
      "submitBtn"
    ).innerHTML =
      "SUBMIT HARDWARE DATA";


    const ids =
      results.join(", ");


    showSuccess(
      "Hardware data submitted successfully.<br>" +
      "Submission ID(s): " + ids
    );


    document.getElementById(
      "hardwareContainer"
    ).innerHTML = "";


    hardwareCount = 0;

    addHardware();


    return;

  }


  const item =
    list[index];


  google.script.run

    .withSuccessHandler(
      function(response) {

        if (!response.success) {

          document.getElementById(
            "loading"
          ).style.display =
            "none";


          document.getElementById(
            "submitBtn"
          ).disabled = false;


          document.getElementById(
            "submitBtn"
          ).innerHTML =
            "SUBMIT HARDWARE DATA";


          showError(
            response.message
          );


          return;

        }


        results.push(
          response.submissionId
        );


        saveNextHardware(
          list,
          index + 1,
          results
        );

      }
    )

    .withFailureHandler(
      function(error) {

        document.getElementById(
          "loading"
        ).style.display =
          "none";


        document.getElementById(
          "submitBtn"
        ).disabled = false;


        document.getElementById(
          "submitBtn"
        ).innerHTML =
          "SUBMIT HARDWARE DATA";


        showError(
          error.message ||
          "Unable to submit data."
        );

      }
    )

    .saveHardware(item);

}

</script>

</body>
</html>
