/* ============================================================
   Exp 2 — Dolly Shots Variants · Dolly In/Out
   Each card links to one YouTube clip and opens it on YouTube
   (new tab) when clicked. Edit `id` per card for its own clip.
   Caption types:
     - normal: model + (with camera movement term "term" in prompt)
     - preset: model + ( preset: <preset> )      ← e.g. Higgsfield
   `fail: true` shows a red FAIL marker after the caption.
   ============================================================ */

const YT_ID1 = "5lAkpjV8hgg";
const YT_ID2 = "3RFQ80ATIgE";
const YT_ID3 = "i85tbBMpwAE";
const YT_ID4 = "wuomcfJuxA0";
const YT_ID5 = "_ywXrZ4MoSg";
const YT_ID6 = "7JLnJ74NOKw";
const YT_ID7 = "wFS5Hnah68A";
const YT_ID8 = "xB7w1T3_6C0";
const YT_ID9 = "cGkyoa1YCng";
const YT_ID10 = "s2ukRUwNe2w";
const YT_ID11 = "YW9WcSKTO8g";
const YT_ID12 = "MSZsVjj7ueI";
const YT_ID13 = "0DZ3-27YT1w";
const YT_ID14 = "VNaIkLv8S1s";
// shared link for all boxes

const videos = [
  { title: "CSV Tilt UpWord",          model: "Cinematic Studio Video_V1.5", term: "Tilt Up", id: YT_ID1 },
  { title: "CSV Tilt DownWord",   model: "Cinematic Studio Video_V1.5", term: "Tilt Down",    id: YT_ID2 },
  { title: "CSV TiltUpModel",     model: "Cinematic Studio Video_V1.5 ", preset: " Tilt Up model" , id: YT_ID3 },
  { title: "CSV TiltDownModel",          model: "Cinematic Studio Video_V1.5", preset: " Tilt Down model", fail: true, id: YT_ID4 },

  { title: "Higgsfield DoP TiltUpModelOnly",      model: "Higgsfield DoP_", preset: " Tilt Up model",  id: YT_ID5 },
  { title: "Higgsfield DoP TiltDownModelOnly", model: "Higgsfield DoP_", preset: " Tilt Down model",  id: YT_ID6 },
   { title: "Kling2 6 Tilt UpWord", model: "Kling2.6_General Model", term: " Tilt Up ", id: YT_ID7 },
  { title: "Kling2 6 Tilt DownWord", model: "Kling2.6_General Model", term: " Tilt Down ", id: YT_ID8 },
  
    { title: "Veo 3 1 Tilt Up",      model: "Veo 3.1 _General Model", term: "Tilt Up",fail: true,  id: YT_ID9 },
  { title: "Veo 3 1 Tilt Down", model: "Veo 3.1 _General Model", term: " Tilt Down ",fail: true, id: YT_ID10 },
   { title: "Seedance1 5 Tilt Up", model: "Seedance 1.5 _General Model", term: " Tilt Up ", id: YT_ID11 },
  { title: "Seedance1 5 Tilt Down", model: "Seedance 1.5 _General Model", term: " Tilt Down ", id: YT_ID12 },
  
  { title: "Minimax Hailuo2 3 Tilt Up", model: "Minimax Hailuo 2.3 _General Model", term: " Tilt Up ", id: YT_ID13 },
  { title: "Minimax Hailuo2 3 Tilt Down", model: "Minimax Hailuo 2.3 _General Model", term: " Tilt Down ", id: YT_ID14 },
];

const grid = document.getElementById("grid");

videos.forEach((v) => {
  const card = document.createElement("article");
  card.className = "vcard";

  const watchUrl = `https://www.youtube.com/watch?v=${v.id}`;
  const thumbUrl = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
  const failMark = v.fail ? ` <span class="failmark">FAIL</span>` : ``;

  // build the caption: preset style vs camera-movement-term style
  let caption;
  if (v.preset) {
    caption = `${v.model} ( preset: ${v.preset} )${failMark}`;
  } else {
    caption =
      `${v.model}<span class="redhint">(with camera movement term</span> ` +
      `"<span class="term">${v.term}</span>" in prompt )${failMark}`;
  }

  card.innerHTML = `
    <a class="vthumb" href="${watchUrl}" target="_blank" rel="noopener"
       style="background-image:url('${thumbUrl}');background-size:cover;background-position:center;"
       aria-label="Open on YouTube: ${v.title}">
      <div class="vbar">
        <span class="vavatar">k</span>
        <span class="vtitle">${v.title}</span>
      </div>
      <span class="vchannel">kayAI</span>
      <span class="vplay" aria-hidden="true"></span>
    </a>
    <p class="vcap">${caption}</p>
  `;

  grid.appendChild(card);
});