(function () {
  "use strict";

  var PRODUCTS = [
    {
      id: "neurocalm",
      name: "Neurocalm",
      generic: "neurocalm mesylate",
      className: "Anxiolytic neuromodulator",
      group: "General Medicine",
      area: ["Neurology"],
      access: "Prescription",
      accessKey: "prescription",
      audiences: ["Patients", "Healthcare Professionals"],
      summary: "For anxiety and stress states, including patients whose stress responses trigger somatic instability.",
      clinicalRole: "A broad outpatient therapy that gives Ordinate a conventional neurology and mental health footprint.",
      monitoring: "Review sedation, driving risk, concurrent CNS-active medicines and stress-associated flare patterns.",
      contraindications: "Known hypersensitivity, uncontrolled sedative use or acute intoxication unless supervised.",
      tags: ["prescription", "patient", "hcp"],
      related: ["somnara", "paxlumen", "myosteady"],
      featured: true,
      patientMaterials: true,
      hcpAvailable: true,
      safetyUpdate: false
    },
    {
      id: "somnara",
      name: "Somnara",
      generic: "somnara tartrate",
      className: "Sleep rhythm stabilizer",
      group: "General Medicine",
      area: ["Neurology", "Recovery"],
      access: "Prescription / specialist use",
      accessKey: "specialist",
      audiences: ["Patients", "Healthcare Professionals"],
      summary: "For sleep disruption, nocturnal nervous-system hyperactivation and circadian rhythm displacement.",
      clinicalRole: "Used where sleep loss amplifies neurological instability or night activation risk.",
      monitoring: "Assess daytime impairment, nocturnal activation episodes, missed doses and concurrent sedatives.",
      contraindications: "Severe untreated respiratory suppression or unmanaged parasomnia with injury risk.",
      tags: ["prescription", "specialist", "patient", "hcp"],
      related: ["neurocalm", "paxlumen", "lumentrace"],
      patientMaterials: true,
      hcpAvailable: true,
      safetyUpdate: false
    },
    {
      id: "dolvenor",
      name: "Dolvenor",
      generic: "dolvenor sodium",
      className: "Anti-inflammatory analgesic",
      group: "General Medicine",
      area: ["Pain & Inflammation"],
      access: "Pharmacy / prescription by market",
      accessKey: "pharmacy",
      audiences: ["Patients", "Healthcare Professionals"],
      summary: "For pain, inflammation, sports injuries and muscle overuse.",
      clinicalRole: "A conventional pain and inflammation product with market-dependent labeling.",
      monitoring: "Monitor gastric tolerance, renal risk, anticoagulants and recurrent overuse injury.",
      contraindications: "Severe NSAID hypersensitivity or active bleeding risk unless locally approved.",
      tags: ["pharmacy", "prescription", "patient"],
      related: ["kinetra", "myosteady", "dermavax"],
      patientMaterials: true,
      hcpAvailable: false,
      safetyUpdate: false
    },
    {
      id: "myosteady",
      name: "Myosteady",
      generic: "myosteady chloride",
      className: "Muscle tone regulator",
      group: "General Medicine",
      area: ["Neurology", "Recovery"],
      access: "Prescription",
      accessKey: "prescription",
      audiences: ["Patients", "Healthcare Professionals"],
      summary: "For tremor, spasms and muscle instability after injury or neurological overload.",
      clinicalRole: "Supports rehabilitation plans where motor tone interrupts daily function.",
      monitoring: "Track falls, tone response, sedation and physical therapy outcomes.",
      contraindications: "Unexplained acute weakness or unstable neuromuscular disease without specialist review.",
      tags: ["prescription", "patient", "hcp"],
      related: ["kinetra", "synaptide-p", "dolvenor"],
      patientMaterials: true,
      hcpAvailable: true,
      safetyUpdate: false
    },
    {
      id: "cardevia",
      name: "Cardevia",
      generic: "cardevia besylate",
      className: "Cardiovascular stabilizer",
      group: "General Medicine",
      area: ["Cardiovascular & Metabolic"],
      access: "Prescription",
      accessKey: "prescription",
      audiences: ["Patients", "Healthcare Professionals"],
      summary: "For blood pressure control, cardiovascular prevention and stress-induced cardiac load.",
      clinicalRole: "Conventional chronic-care medicine for non-pigment and pigment patients.",
      monitoring: "Blood pressure, heart rate, electrolyte status and stress-triggered symptom diaries.",
      contraindications: "Unstable hypotension or incompatible cardiac conduction disorders.",
      tags: ["prescription", "patient", "hcp"],
      related: ["glycora", "neurocalm", "lumentrace"],
      patientMaterials: true,
      hcpAvailable: true,
      safetyUpdate: false
    },
    {
      id: "glycora",
      name: "Glycora",
      generic: "glycora fumarate",
      className: "Metabolic therapy",
      group: "General Medicine",
      area: ["Cardiovascular & Metabolic"],
      access: "Prescription",
      accessKey: "prescription",
      audiences: ["Patients", "Healthcare Professionals"],
      summary: "For metabolic disorders, insulin resistance and energy-exchange control.",
      clinicalRole: "A metabolic platform therapy used across ordinary chronic care programs.",
      monitoring: "Glucose metrics, renal function, weight change and hypoglycemia risk.",
      contraindications: "Severe acute metabolic decompensation outside hospital supervision.",
      tags: ["prescription", "patient", "hcp"],
      related: ["cardevia", "chromopanel-7"],
      patientMaterials: true,
      hcpAvailable: true,
      safetyUpdate: false
    },
    {
      id: "respivar",
      name: "Respivar",
      generic: "respivar propionate",
      className: "Respiratory anti-inflammatory",
      group: "General Medicine",
      area: ["Respiratory", "Pain & Inflammation"],
      access: "Prescription",
      accessKey: "prescription",
      audiences: ["Patients", "Healthcare Professionals"],
      summary: "For chronic airway inflammation, asthma-like states and irritation after smoke, dust or industrial exposure.",
      clinicalRole: "Occupational and respiratory medicine for mixed urban and industrial populations.",
      monitoring: "Pulmonary function, rescue inhaler use, infection signals and exposure history.",
      contraindications: "Untreated acute respiratory failure requiring emergency care.",
      tags: ["prescription", "patient", "hcp"],
      related: ["dermavax", "incidentlink"],
      patientMaterials: true,
      hcpAvailable: true,
      safetyUpdate: false
    },
    {
      id: "dermavax",
      name: "Dermavax",
      generic: "dermavax barrier complex",
      className: "Dermatological barrier therapy",
      group: "General Medicine",
      area: ["Dermatology"],
      access: "Pharmacy / prescription",
      accessKey: "pharmacy",
      audiences: ["Patients", "Healthcare Professionals"],
      summary: "For skin barrier damage, irritation, photosensitivity and contact dermatitis.",
      clinicalRole: "A conventional dermatology product that also overlaps with light-exposure care.",
      monitoring: "Irritation, infection, photosensitivity persistence and topical medicine interactions.",
      contraindications: "Known ingredient allergy or suspected infected wounds needing clinician care.",
      tags: ["pharmacy", "prescription", "patient"],
      related: ["dermalux", "oculite-p", "dolvenor"],
      patientMaterials: true,
      hcpAvailable: false,
      safetyUpdate: true
    },
    {
      id: "hemovance",
      name: "Hemovance",
      generic: "hemovance clotting support",
      className: "Acute hemostatic support",
      group: "Hospital / Acute Care",
      area: ["Acute Care"],
      access: "Hospital only",
      accessKey: "hospital",
      audiences: ["Healthcare Professionals", "Hospitals"],
      summary: "For control of bleeding in surgery and trauma care.",
      clinicalRole: "Hospital-only acute care therapy supplied through institutional channels.",
      monitoring: "Coagulation profile, thrombotic risk, surgical source control and transfusion status.",
      contraindications: "Non-indicated prophylactic use outside approved bleeding-control protocols.",
      tags: ["hospital", "hcp"],
      related: ["traumexin", "nocirel", "burnaxis"],
      featured: true,
      patientMaterials: false,
      hcpAvailable: true,
      safetyUpdate: false
    },
    {
      id: "seizuril",
      name: "Seizuril",
      generic: "seizuril acetate",
      className: "Acute neurostabilizer",
      group: "Hospital / Acute Care",
      area: ["Neurology", "Acute Care"],
      access: "Hospital / emergency use",
      accessKey: "hospital",
      audiences: ["Healthcare Professionals", "Hospitals"],
      summary: "For seizure states and acute neurological hyperactivation.",
      clinicalRole: "Emergency medicine therapy used when rapid neurological stabilization is required.",
      monitoring: "Airway status, neurological exam, recurrent events and CNS depressant interactions.",
      contraindications: "Use outside emergency or supervised hospital settings.",
      tags: ["hospital", "hcp"],
      related: ["neurocalm", "somnara", "synaptide-p"],
      patientMaterials: false,
      hcpAvailable: true,
      safetyUpdate: true
    },
    {
      id: "traumexin",
      name: "Traumexin",
      generic: "traumexin beta",
      className: "Trauma inflammation modulator",
      group: "Hospital / Acute Care",
      area: ["Acute Care", "Pain & Inflammation"],
      access: "Hospital only",
      accessKey: "hospital",
      audiences: ["Healthcare Professionals", "Hospitals"],
      summary: "For severe trauma, multi-organ inflammation and postoperative complications.",
      clinicalRole: "Critical-care adjunct for complex trauma and surgical recovery.",
      monitoring: "Inflammatory markers, infection risk, organ function and wound progression.",
      contraindications: "Uncontrolled infection without source evaluation.",
      tags: ["hospital", "hcp"],
      related: ["hemovance", "burnaxis", "nocirel"],
      patientMaterials: false,
      hcpAvailable: true,
      safetyUpdate: false
    },
    {
      id: "nocirel",
      name: "Nocirel",
      generic: "nocirel lactate",
      className: "Procedural pain control adjunct",
      group: "Hospital / Acute Care",
      area: ["Pain & Inflammation", "Acute Care"],
      access: "Hospital only",
      accessKey: "hospital",
      audiences: ["Healthcare Professionals", "Hospitals"],
      summary: "For pain control during procedures and after surgery.",
      clinicalRole: "Adjunctive hospital pain control where procedural stability matters.",
      monitoring: "Sedation score, respiratory status, pain score and concomitant analgesics.",
      contraindications: "Unmonitored outpatient use.",
      tags: ["hospital", "hcp"],
      related: ["dolvenor", "traumexin", "hemovance"],
      patientMaterials: false,
      hcpAvailable: true,
      safetyUpdate: false
    },
    {
      id: "burnaxis",
      name: "Burnaxis",
      generic: "burnaxis tissue support",
      className: "Tissue repair support",
      group: "Hospital / Acute Care",
      area: ["Dermatology", "Acute Care", "Recovery"],
      access: "Hospital / specialist prescription",
      accessKey: "specialist",
      audiences: ["Healthcare Professionals", "Hospitals"],
      summary: "For burns, thermal injury and tissue damage after extreme physical exertion.",
      clinicalRole: "Specialist therapy bridging burn units, emergency care and rehabilitation.",
      monitoring: "Wound status, infection risk, graft compatibility and pain control.",
      contraindications: "Use on unassessed deep injury outside emergency/specialist care.",
      tags: ["hospital", "specialist", "hcp"],
      related: ["dermalux", "traumexin", "dermavax"],
      patientMaterials: false,
      hcpAvailable: true,
      safetyUpdate: false
    },
    {
      id: "achromavir",
      name: "Achromavir",
      generic: "achromavir complex",
      className: "Maintenance suppressor",
      group: "Pigment Integration Medicine",
      area: ["Pigment Stability", "Suppression"],
      access: "Prescription only",
      accessKey: "prescription",
      audiences: ["Patients", "Healthcare Professionals", "Schools", "Employers"],
      summary: "For voluntary pigment stability and reduction of involuntary glow or activation episodes while preserving conscious access.",
      clinicalRole: "Sits between lifestyle management and full pigment blockade. It is not forced suppression, tactical enhancement or emergency deactivation.",
      monitoring: "Review breakthrough activation, missed therapy, fatigue, sleep activation and interactions with Leukostat or restricted coordinate medicines.",
      contraindications: "Forced non-consensual use outside approved medical or legal frameworks; unresolved loss of conscious access.",
      tags: ["prescription", "patient", "hcp", "pigment-specific"],
      related: ["leukostat", "axisol", "paxlumen", "lumentrace"],
      featured: true,
      patientMaterials: true,
      hcpAvailable: true,
      pigmentSpecific: true,
      safetyUpdate: true
    },
    {
      id: "leukostat",
      name: "Leukostat",
      generic: "leukostatic coordinate blocker",
      className: "Pigment blocker",
      group: "Pigment Integration Medicine",
      area: ["Pigment Suppression", "Suppression"],
      access: "Prescription / regulated medical supervision",
      accessKey: "prescription",
      audiences: ["Patients", "Healthcare Professionals", "Institutions", "Regulators"],
      summary: "For temporary full suppression of pigment functionality when medically, procedurally or legally required.",
      clinicalRole: "A serious regulated blocker used for surgery, emergency stabilization, high-risk work and approved legal or institutional medical protocols.",
      monitoring: "Document consent pathway, suppression onset, return of conscious access, neurological symptoms and rebound activation.",
      contraindications: "Use as a social compliance tool outside approved medical or legal frameworks.",
      tags: ["prescription", "hcp", "pigment-specific", "restricted"],
      related: ["achromavir", "pallidex", "nullcord", "axisol"],
      featured: true,
      patientMaterials: true,
      hcpAvailable: true,
      pigmentSpecific: true,
      safetyUpdate: true
    },
    {
      id: "axisol",
      name: "Axisol",
      generic: "axisol pediatric stabilizer",
      className: "Coordinate stability support",
      group: "Pigment Integration Medicine",
      area: ["Pigment Stability", "Pediatric Pigment Medicine"],
      access: "Prescription / pediatric supervision",
      accessKey: "specialist",
      audiences: ["Patients", "Healthcare Professionals"],
      summary: "For unstable early pigment expression in children and adolescents triggered by fear, pain, shame or overload.",
      clinicalRole: "Family medicine and pediatric registry therapy designed to avoid full suppression where possible.",
      monitoring: "Growth status, school incidents, consent, caregiver reporting and adolescent autonomy safeguards.",
      contraindications: "Use without pediatric oversight or outside documented family support planning.",
      tags: ["specialist", "patient", "hcp", "pigment-specific"],
      related: ["achromavir", "paxlumen", "lumentrace"],
      patientMaterials: true,
      hcpAvailable: true,
      pigmentSpecific: true,
      safetyUpdate: false
    },
    {
      id: "lumenveil",
      name: "Lumenveil",
      generic: "lumenveil attenuation complex",
      className: "Glow attenuation therapy",
      group: "Pigment Integration Medicine",
      area: ["Pigment Stability", "Dermatology"],
      access: "Prescription",
      accessKey: "prescription",
      audiences: ["Patients", "Healthcare Professionals"],
      summary: "For reduction of visible glow without full functional blockade.",
      clinicalRole: "Works on manifestation visibility rather than whole-ability encapsulation.",
      monitoring: "Glow frequency, public visibility anxiety, photosensitivity and breakthrough flare episodes.",
      contraindications: "Use where full suppression is medically required.",
      tags: ["prescription", "patient", "hcp", "pigment-specific"],
      related: ["achromavir", "dermalux", "oculite-p"],
      patientMaterials: true,
      hcpAvailable: true,
      pigmentSpecific: true,
      safetyUpdate: false
    },
    {
      id: "synaptide-p",
      name: "Synaptide-P",
      generic: "synaptide pigment recovery peptide",
      className: "Post-activation neural recovery agent",
      group: "Pigment Integration Medicine",
      area: ["Neurology", "Recovery", "Pigment Recovery"],
      access: "Prescription / sports medicine / specialist",
      accessKey: "specialist",
      audiences: ["Patients", "Healthcare Professionals", "Sports Medicine"],
      summary: "For neurological recovery after prolonged or intensive pigment use.",
      clinicalRole: "A bridge between civilian medicine, sport protocols and institutional recovery medicine.",
      monitoring: "CNS exhaustion, headache, attention, sleep and return-to-activity plans.",
      contraindications: "Use to extend unsafe exertion instead of recovery.",
      tags: ["specialist", "patient", "hcp", "pigment-specific"],
      related: ["kinetra", "chromafinil", "lumentrace"],
      patientMaterials: true,
      hcpAvailable: true,
      pigmentSpecific: true,
      safetyUpdate: false
    },
    {
      id: "kinetra",
      name: "Kinetra",
      generic: "kinetra exertion recovery therapy",
      className: "Pigment exertion recovery therapy",
      group: "Pigment Integration Medicine",
      area: ["Recovery", "Pigment Stability"],
      access: "Prescription / sports medicine",
      accessKey: "specialist",
      audiences: ["Patients", "Healthcare Professionals", "Sports Medicine"],
      summary: "For muscular, vestibular and coordination recovery after jumps, barriers, spatial manipulation or intensive matches.",
      clinicalRole: "Civilian and sports medicine recovery therapy for exertion loads unique to pigment carriers.",
      monitoring: "Balance, muscle injury, vestibular symptoms, collapse risk and competition restrictions.",
      contraindications: "Use as a performance enhancer or to bypass mandatory recovery intervals.",
      tags: ["specialist", "patient", "hcp", "pigment-specific"],
      related: ["synaptide-p", "dolvenor", "myosteady"],
      featured: true,
      patientMaterials: true,
      hcpAvailable: true,
      pigmentSpecific: true,
      safetyUpdate: false
    },
    {
      id: "paxlumen",
      name: "Paxlumen",
      generic: "paxlumen flare control therapy",
      className: "Stress-flare control therapy",
      group: "Pigment Integration Medicine",
      area: ["Pigment Stability", "Neurology"],
      access: "Prescription",
      accessKey: "prescription",
      audiences: ["Patients", "Healthcare Professionals"],
      summary: "For patients whose panic, pain or trauma reaction triggers uncontrolled glow or activation.",
      clinicalRole: "Targets stress-linked activation without presenting pigment as a disease state.",
      monitoring: "Trauma history, panic episodes, sleep loss, pain triggers and concurrent suppressors.",
      contraindications: "Unassessed acute psychiatric crisis requiring emergency care.",
      tags: ["prescription", "patient", "hcp", "pigment-specific"],
      related: ["achromavir", "neurocalm", "axisol"],
      patientMaterials: true,
      hcpAvailable: true,
      pigmentSpecific: true,
      safetyUpdate: false
    },
    {
      id: "dermalux",
      name: "Dermalux",
      generic: "dermalux topical complex",
      className: "Pigment-associated dermatological therapy",
      group: "Pigment Integration Medicine",
      area: ["Dermatology", "Pigment Stability"],
      access: "Pharmacy / prescription",
      accessKey: "pharmacy",
      audiences: ["Patients", "Healthcare Professionals"],
      summary: "For skin irritation, photosensitive reactions, localized burns, itching or inflammation after frequent glow manifestation.",
      clinicalRole: "A dermatology bridge between ordinary skin care and pigment-associated exposure.",
      monitoring: "Burn severity, infection signals, glow exposure frequency and topical medicine interactions.",
      contraindications: "Deep burns or spreading infection without clinician review.",
      tags: ["pharmacy", "prescription", "patient", "pigment-specific"],
      related: ["dermavax", "lumenveil", "burnaxis"],
      patientMaterials: true,
      hcpAvailable: false,
      pigmentSpecific: true,
      safetyUpdate: false
    },
    {
      id: "oculite-p",
      name: "Oculite-P",
      generic: "oculite pigment exposure drops",
      className: "Ophthalmic pigment exposure therapy",
      group: "Pigment Integration Medicine",
      area: ["Ophthalmology", "Pigment Stability"],
      access: "Prescription",
      accessKey: "prescription",
      audiences: ["Patients", "Healthcare Professionals"],
      summary: "For eye irritation after light bursts, optical overload, domain manifestations, training or emergency activation.",
      clinicalRole: "Specialized eye-care therapy for optical overload related to pigment activity.",
      monitoring: "Visual acuity, photophobia, retinal warning symptoms and recurring exposure.",
      contraindications: "Acute vision loss or ocular trauma without urgent specialist care.",
      tags: ["prescription", "patient", "hcp", "pigment-specific"],
      related: ["lumenveil", "dermalux", "incidentlink"],
      patientMaterials: true,
      hcpAvailable: true,
      pigmentSpecific: true,
      safetyUpdate: false
    },
    {
      id: "saturine",
      name: "Saturine",
      generic: "restricted coordinate modifier",
      className: "Coordinate modifier",
      group: "Restricted Coordinate Programs",
      area: ["Coordinate Modulation"],
      access: "Military / strict control",
      accessKey: "military",
      audiences: ["Authorized Institutions"],
      summary: "Public information is limited. Access is restricted to authorized military medical programs and approved institutional protocols.",
      clinicalRole: "Developed for controlled operational contexts where temporary expansion of pigment expression is required under strict supervision.",
      monitoring: "Not publicly disclosed.",
      contraindications: "No public protocol details are provided.",
      tags: ["restricted", "military", "institution"],
      related: ["chromafinil", "redline-c", "calibrant-6"],
      featured: true,
      patientMaterials: false,
      hcpAvailable: false,
      pigmentSpecific: true,
      restricted: true,
      military: true,
      safetyUpdate: false
    },
    {
      id: "chromafinil",
      name: "Chromafinil",
      generic: "chromafinil operational stimulant",
      className: "Neurostimulant",
      group: "Restricted Coordinate Programs",
      area: ["Coordinate Modulation", "Recovery"],
      access: "Military / special assignment",
      accessKey: "military",
      audiences: ["Authorized Institutions"],
      summary: "Controlled operational endurance therapy for focus, stamina and duration of pigment control under assignment.",
      clinicalRole: "Not an energy pill. Used only under operational medical supervision.",
      monitoring: "Restricted to authorized medical protocols.",
      contraindications: "Public use, sport use or civilian performance use.",
      tags: ["restricted", "military", "institution"],
      related: ["synaptide-p", "saturine", "redline-c"],
      patientMaterials: false,
      hcpAvailable: false,
      pigmentSpecific: true,
      restricted: true,
      military: true,
      safetyUpdate: true
    },
    {
      id: "pallidex",
      name: "Pallidex",
      generic: "pallidex emergency deactivation agent",
      className: "Emergency pigment deactivation agent",
      group: "Restricted Coordinate Programs",
      area: ["Suppression", "Acute Care"],
      access: "Restricted institutional / emergency response",
      accessKey: "restricted",
      audiences: ["Authorized Institutions", "Emergency Authorities"],
      summary: "For crisis deactivation of dangerous uncontrolled activation where Leukostat is too slow or insufficient.",
      clinicalRole: "Authorized emergency protocols only.",
      monitoring: "Restricted emergency reporting and institutional incident review.",
      contraindications: "Non-emergency coercive use or unsupervised possession.",
      tags: ["restricted", "institution", "hcp", "pigment-specific"],
      related: ["leukostat", "nullcord", "incidentlink"],
      patientMaterials: false,
      hcpAvailable: false,
      pigmentSpecific: true,
      restricted: true,
      safetyUpdate: true
    },
    {
      id: "calibrant-6",
      name: "Calibrant-6",
      generic: "axis calibration adjunct",
      className: "Axis calibration adjunct",
      group: "Restricted Coordinate Programs",
      area: ["Coordinate Modulation", "Diagnostics"],
      access: "Restricted clinical / research",
      accessKey: "restricted",
      audiences: ["Authorized Institutions", "Licensed Research Facilities"],
      summary: "For short-term stabilization of axis deviations during controlled testing or rehabilitation.",
      clinicalRole: "Research medicine linking six-axis calibration to R&D protocols.",
      monitoring: "Restricted protocol supervision, axis logging and safety database reporting.",
      contraindications: "Unlicensed testing or unsupported rehabilitation settings.",
      tags: ["restricted", "institution", "research", "pigment-specific"],
      related: ["axismap-dx", "saturine", "chromopanel-7"],
      patientMaterials: false,
      hcpAvailable: false,
      pigmentSpecific: true,
      restricted: true,
      safetyUpdate: false
    },
    {
      id: "nullcord",
      name: "Nullcord",
      generic: "containment-support blocker",
      className: "Containment-support blocker",
      group: "Restricted Coordinate Programs",
      area: ["Suppression"],
      access: "Government / forensic / containment medicine",
      accessKey: "restricted",
      audiences: ["Authorized Institutions", "Regulators", "Courts"],
      summary: "For high-risk carriers in forensic, prison or state medical protocols.",
      clinicalRole: "Public communications remain legal, dry and non-promotional.",
      monitoring: "Court authorization, medical necessity, incident reporting and human-rights review.",
      contraindications: "Use without documented legal authority and independent medical review.",
      tags: ["restricted", "institution", "regulator", "pigment-specific"],
      related: ["leukostat", "pallidex", "incidentlink"],
      patientMaterials: false,
      hcpAvailable: false,
      pigmentSpecific: true,
      restricted: true,
      safetyUpdate: true
    },
    {
      id: "redline-c",
      name: "Redline-C",
      generic: "red-axis exertion protection",
      className: "Red-axis exertion protection",
      group: "Restricted Coordinate Programs",
      area: ["Recovery", "Coordinate Modulation"],
      access: "Restricted / military medicine",
      accessKey: "military",
      audiences: ["Authorized Institutions"],
      summary: "For mitigation of neuromuscular consequences after combat use of the red axis.",
      clinicalRole: "Military medicine program with public details limited.",
      monitoring: "Restricted operational medical monitoring.",
      contraindications: "Civilian performance use.",
      tags: ["restricted", "military", "institution", "pigment-specific"],
      related: ["chromafinil", "saturine", "synaptide-p"],
      patientMaterials: false,
      hcpAvailable: false,
      pigmentSpecific: true,
      restricted: true,
      military: true,
      safetyUpdate: false
    },
    {
      id: "axismap-dx",
      name: "AxisMap Dx",
      generic: "coordinate diagnostic panel",
      className: "Coordinate diagnostic panel",
      group: "Diagnostics / Monitoring",
      area: ["Diagnostics", "Pigment Stability"],
      access: "Clinical diagnostic",
      accessKey: "specialist",
      audiences: ["Healthcare Professionals", "Hospitals"],
      summary: "For profiling pigment coordinate, involuntary activation risk and axis deviations.",
      clinicalRole: "Companion diagnostic logic for pigment medicine selection and monitoring.",
      monitoring: "Country-specific diagnostic rules, consent and data minimization.",
      contraindications: "Non-consensual screening outside approved legal frameworks.",
      tags: ["specialist", "hcp", "diagnostics", "pigment-specific"],
      related: ["calibrant-6", "lumentrace", "chromopanel-7"],
      patientMaterials: false,
      hcpAvailable: true,
      pigmentSpecific: true,
      safetyUpdate: false
    },
    {
      id: "lumentrace",
      name: "LumenTrace",
      generic: "wearable monitoring system",
      className: "Wearable monitoring system",
      group: "Diagnostics / Monitoring",
      area: ["Diagnostics", "Pigment Stability"],
      access: "Clinical / occupational",
      accessKey: "specialist",
      audiences: ["Patients", "Healthcare Professionals", "Employers"],
      summary: "For tracking glow frequency, stress flare episodes, night activation and therapy response.",
      clinicalRole: "A monitoring bridge between patient autonomy, occupational safety and clinical care.",
      monitoring: "Privacy consent, employer access boundaries and clinical interpretation.",
      contraindications: "Use for disciplinary surveillance outside declared medical or safety programs.",
      tags: ["specialist", "patient", "hcp", "diagnostics", "pigment-specific"],
      related: ["achromavir", "paxlumen", "axismap-dx"],
      patientMaterials: true,
      hcpAvailable: true,
      pigmentSpecific: true,
      safetyUpdate: false
    },
    {
      id: "chromopanel-7",
      name: "ChromoPanel-7",
      generic: "laboratory biomarker panel",
      className: "Laboratory biomarker panel",
      group: "Diagnostics / Monitoring",
      area: ["Diagnostics", "Recovery"],
      access: "Clinical lab",
      accessKey: "specialist",
      audiences: ["Healthcare Professionals", "Hospitals"],
      summary: "For assessment of seven domains, inflammation, neural load and post-activation exhaustion.",
      clinicalRole: "Laboratory biomarker support for personalized pigment medicine.",
      monitoring: "Laboratory quality controls, consent and local diagnostic regulations.",
      contraindications: "Non-clinical scoring used as employment or insurance discrimination.",
      tags: ["specialist", "hcp", "diagnostics", "pigment-specific"],
      related: ["synaptide-p", "axismap-dx", "glycora"],
      patientMaterials: false,
      hcpAvailable: true,
      pigmentSpecific: true,
      safetyUpdate: false
    },
    {
      id: "incidentlink",
      name: "IncidentLink",
      generic: "adverse pigment activation reporting platform",
      className: "Safety and pharmacovigilance platform",
      group: "Diagnostics / Monitoring",
      area: ["Diagnostics", "Safety"],
      access: "Safety / pharmacovigilance",
      accessKey: "hcp",
      audiences: ["Patients", "Healthcare Professionals", "Institutions", "Regulators"],
      summary: "For reports of accidental activation, excessive suppression, failure to suppress, injury during pigment use and military product incidents.",
      clinicalRole: "Safety database intake platform for ordinary and pigment-specific pharmacovigilance.",
      monitoring: "Reporter follow-up, local regulation and database case reconciliation.",
      contraindications: "Use as an emergency substitute. Immediate danger requires local emergency services.",
      tags: ["hcp", "patient", "safety", "diagnostics", "pigment-specific"],
      related: ["pallidex", "leukostat", "lumentrace"],
      patientMaterials: true,
      hcpAvailable: true,
      pigmentSpecific: true,
      safetyUpdate: true
    }
  ];

  var PIPELINE = [
    {
      code: "ACR-204",
      name: "Next-generation Achromavir formulation",
      area: "Pigment Stability",
      phase: "Phase II",
      access: "Public",
      modality: "Maintenance suppressor",
      goal: "Lower breakthrough activation during pain shock.",
      status: "Active"
    },
    {
      code: "LKS-310",
      name: "Long-acting Leukostat formulation",
      area: "Pigment Suppression",
      phase: "Phase I / II",
      access: "HCP",
      modality: "Coordinate blocker",
      goal: "Supervised longer blockade for surgical and institutional use.",
      status: "Active"
    },
    {
      code: "SYN-P7",
      name: "Post-activation neural recovery therapy",
      area: "Neurology / Pigment Recovery",
      phase: "Phase II",
      access: "Public",
      modality: "Neural recovery agent",
      goal: "Reduce CNS exhaustion after extended pigment exertion.",
      status: "Active"
    },
    {
      code: "AXM-06",
      name: "Axis-specific pediatric stabilizer",
      area: "Pediatric Pigment Medicine",
      phase: "Preclinical",
      access: "HCP",
      modality: "Pediatric stabilizer",
      goal: "Reduce unstable adolescent activation without full suppression.",
      status: "Active"
    },
    {
      code: "CRF-12",
      name: "Chromafinil civilian derivative",
      area: "Focus / Pigment Endurance",
      phase: "Discontinued / restricted review",
      access: "Restricted",
      modality: "Neurostimulant derivative",
      goal: "Program halted after unacceptable misuse potential.",
      status: "Discontinued"
    },
    {
      code: "RDL-C",
      name: "Red-axis injury mitigation therapy",
      area: "Restricted / Military Medicine",
      phase: "Restricted development",
      access: "Military",
      modality: "Neuromuscular protection",
      goal: "Public details limited.",
      status: "Restricted"
    },
    {
      code: "LMT-22",
      name: "LumenTrace occupational privacy protocol",
      area: "Diagnostics",
      phase: "Registration",
      access: "Public",
      modality: "Monitoring platform",
      goal: "Separate clinical signal reporting from employer visibility data.",
      status: "Active"
    },
    {
      code: "HVA-908",
      name: "Hemovance field stabilization pack",
      area: "Acute Care",
      phase: "Phase III",
      access: "HCP",
      modality: "Hemostatic support",
      goal: "Support pre-hospital hemorrhage control under paramedic supervision.",
      status: "Active"
    }
  ];

  var AUDIENCE_LABELS = {
    patient: "Patient / Caregiver",
    hcp: "Healthcare Professional",
    hospital: "Hospital or Clinic",
    regulator: "Regulator",
    institution: "Authorized Institution",
    media: "Media"
  };

  var REGION_LABELS = {
    us: "United States",
    eu: "European Union",
    uk: "United Kingdom",
    ua: "Ukraine",
    jp: "Japan",
    global: "Global"
  };

  var state = {
    gate: readGate(),
    medicineMode: "az"
  };

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    injectChrome();
    wireGlobalActions();
    updateAudienceLabels();
    maybeShowGate();
    renderFeaturedProducts();
    renderMedicineCatalog();
    renderPigmentMatrix();
    renderPipeline();
    renderPipelinePreview();
    renderProductDetail();
    renderMedicalSearch();
    wireForms();
    wireRestrictedAccess();
    applyStaticLocks();
  }

  function injectChrome() {
    var headerTargets = document.querySelectorAll("[data-site-header]");
    headerTargets.forEach(function (target) {
      target.innerHTML = headerMarkup();
    });

    var footerTargets = document.querySelectorAll("[data-site-footer]");
    footerTargets.forEach(function (target) {
      target.innerHTML = footerMarkup();
    });

    var current = document.body.getAttribute("data-page") || "home";
    document.querySelectorAll(".primary-nav a, .utility-nav a").forEach(function (link) {
      if (link.getAttribute("data-nav") === current) {
        link.classList.add("active");
      }
    });

    document.body.insertAdjacentHTML("beforeend", gateMarkup());
  }

  function headerMarkup() {
    return [
      '<header class="site-header" data-header>',
      '  <div class="top-notice">',
      '    <span>Product information may differ by country and audience. This fictional site is not medical advice.</span>',
      '    <a href="report-adverse-event.html">Report an adverse event</a>',
      '  </div>',
      '  <div class="nav-shell">',
      '    <a class="brand" href="index.html" aria-label="Ordinate Therapeutics home"><span class="brand-mark"></span><span>Ordinate Therapeutics</span></a>',
      '    <button class="mobile-nav-button" type="button" data-nav-toggle>Menu</button>',
      '    <nav class="primary-nav" aria-label="Primary">',
      '      <a data-nav="medicines" href="medicines.html">Medicines</a>',
      '      <a data-nav="pigment" href="pigment-medicine.html">Pigment Medicine</a>',
      '      <a data-nav="pipeline" href="pipeline.html">Research & Pipeline</a>',
      '      <a data-nav="safety" href="safety.html">Safety</a>',
      '      <a data-nav="medical" href="medical-information.html">Medical Information</a>',
      '      <a data-nav="access" href="access-programs.html">Access Programs</a>',
      '      <a data-nav="about" href="about.html">About</a>',
      '      <a data-nav="news" href="news.html">News</a>',
      '      <a data-nav="contact" href="contact.html">Contact</a>',
      '    </nav>',
      '    <div class="utility-nav">',
      '      <button type="button" data-gate-open>Country / Region: <span data-region-label>Not selected</span></button>',
      '      <button type="button" data-gate-open>For <span data-audience-label>Audience</span></button>',
      '      <a class="report-link" href="report-adverse-event.html">Report Adverse Event</a>',
      '      <a class="restricted-link" data-nav="restricted" href="restricted-access.html">Restricted Institutional Access</a>',
      '    </div>',
      '  </div>',
      '</header>'
    ].join("");
  }

  function footerMarkup() {
    return [
      '<footer class="site-footer">',
      '  <div class="footer-inner">',
      '    <div class="footer-grid">',
      '      <div>',
      '        <h3>Ordinate Therapeutics</h3>',
      '        <p>Pharmaceutical systems for neurological control, acute care, pigment stability and institutional safety.</p>',
      '      </div>',
      '      <div><h4>Medicines</h4><ul>',
      '        <li><a href="medicines.html">A-Z Medicines</a></li>',
      '        <li><a href="pigment-medicine.html">Pigment Medicine</a></li>',
      '        <li><a href="product.html?id=achromavir">Achromavir</a></li>',
      '        <li><a href="product.html?id=leukostat">Leukostat</a></li>',
      '      </ul></div>',
      '      <div><h4>Safety</h4><ul>',
      '        <li><a href="report-adverse-event.html">Report Adverse Event</a></li>',
      '        <li><a href="product-quality-complaint.html">Product Quality Complaint</a></li>',
      '        <li><a href="pigment-activation-incident.html">Pigment Activation Incident</a></li>',
      '        <li><a href="recalls.html">Batch Recall Notices</a></li>',
      '      </ul></div>',
      '      <div><h4>Medical</h4><ul>',
      '        <li><a href="medical-information.html">Medical Information</a></li>',
      '        <li><a href="access-programs.html">Expanded Access</a></li>',
      '        <li><a href="pipeline.html">Pipeline</a></li>',
      '        <li><a href="hcp-letters.html">HCP Letters</a></li>',
      '      </ul></div>',
      '      <div><h4>Governance</h4><ul>',
      '        <li><a href="medication-and-pigment-autonomy.html">Medication and Autonomy</a></li>',
      '        <li><a href="suppression-therapies-minors.html">Suppression in Minors</a></li>',
      '        <li><a href="transparency-report.html">Institutional Transparency</a></li>',
      '        <li><a href="restricted-access.html">Restricted Access</a></li>',
      '      </ul></div>',
      '    </div>',
      '    <div class="fine-print">',
      '      <p>Ordinate Therapeutics is a fictional corporate pharmaceutical site created for worldbuilding. Product names, safety notices, forms and regulatory language are fictional and must not be used as medical guidance.</p>',
      '      <p>Prescription medicine information is governed by local regulation. Public pages may intentionally limit details for HCP-only, institutional or military-controlled products.</p>',
      '    </div>',
      '  </div>',
      '</footer>'
    ].join("");
  }

  function gateMarkup() {
    return [
      '<div class="gate-modal" id="audienceGate" hidden>',
      '  <div class="gate-dialog" role="dialog" aria-modal="true" aria-labelledby="gateTitle">',
      '    <div class="gate-head">',
      '      <div>',
      '        <div class="eyebrow">Local product information</div>',
      '        <h2 id="gateTitle">Select your region and audience</h2>',
      '      </div>',
      '      <button type="button" class="gate-close" data-gate-close aria-label="Close">x</button>',
      '    </div>',
      '    <div class="gate-body">',
      '      <p>Ordinate products are approved, supplied or made available according to local medical, institutional and regulatory requirements. Some information is restricted to healthcare professionals or authorized institutions.</p>',
      '      <div class="field compact">',
      '        <label for="gateRegion">Country / Region</label>',
      '        <select id="gateRegion" data-gate-region>',
      '          <option value="us">United States</option>',
      '          <option value="eu">European Union</option>',
      '          <option value="uk">United Kingdom</option>',
      '          <option value="ua">Ukraine</option>',
      '          <option value="jp">Japan</option>',
      '          <option value="global">Global / other</option>',
      '        </select>',
      '      </div>',
      '      <div class="audience-grid" aria-label="Audience choices">',
      '        <button class="audience-choice" type="button" data-audience="patient"><b>I am a patient / caregiver</b><span>Public patient education and safety reporting.</span></button>',
      '        <button class="audience-choice" type="button" data-audience="hcp"><b>I am a healthcare professional</b><span>HCP prescribing documents and medical information.</span></button>',
      '        <button class="audience-choice" type="button" data-audience="hospital"><b>I represent a hospital or clinic</b><span>Hospital-only products, access pathways and institutional safety.</span></button>',
      '        <button class="audience-choice" type="button" data-audience="regulator"><b>I represent a regulator</b><span>Safety communications, recalls and pharmacovigilance contacts.</span></button>',
      '        <button class="audience-choice" type="button" data-audience="institution"><b>I represent an authorized institution</b><span>Restricted coordinate program inquiry and incident reporting.</span></button>',
      '        <button class="audience-choice" type="button" data-audience="media"><b>I am a member of the media</b><span>Corporate information and public statements.</span></button>',
      '      </div>',
      '      <p class="fine-print">This selection is stored only in your browser for this static demonstration.</p>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join("");
  }

  function wireGlobalActions() {
    document.addEventListener("click", function (event) {
      var gateOpen = event.target.closest("[data-gate-open]");
      if (gateOpen) {
        event.preventDefault();
        showGate(true);
        return;
      }

      var gateClose = event.target.closest("[data-gate-close]");
      if (gateClose) {
        if (state.gate) {
          hideGate();
        }
        return;
      }

      var audience = event.target.closest("[data-audience]");
      if (audience) {
        setGate(audience.getAttribute("data-audience"));
        hideGate();
        applyStaticLocks();
        renderProductDetail();
        renderMedicineCatalog();
        updateAudienceLabels();
        return;
      }

      var navToggle = event.target.closest("[data-nav-toggle]");
      if (navToggle) {
        var header = document.querySelector("[data-header]");
        if (header) header.classList.toggle("nav-open");
      }
    });
  }

  function readGate() {
    try {
      var raw = localStorage.getItem("ordinateAudienceGate");
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  }

  function setGate(audience) {
    var regionSelect = document.querySelector("[data-gate-region]");
    state.gate = {
      audience: audience,
      region: regionSelect ? regionSelect.value : "us",
      selectedAt: new Date().toISOString()
    };
    localStorage.setItem("ordinateAudienceGate", JSON.stringify(state.gate));
  }

  function maybeShowGate() {
    if (!state.gate) showGate(false);
  }

  function showGate(force) {
    var modal = document.getElementById("audienceGate");
    if (!modal) return;
    if (!force && state.gate) return;
    var region = modal.querySelector("[data-gate-region]");
    if (region && state.gate) region.value = state.gate.region || "us";
    modal.hidden = false;
    document.body.classList.add("gate-open");
  }

  function hideGate() {
    var modal = document.getElementById("audienceGate");
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("gate-open");
  }

  function updateAudienceLabels() {
    var audience = state.gate ? state.gate.audience : null;
    var region = state.gate ? state.gate.region : null;
    document.querySelectorAll("[data-audience-label]").forEach(function (node) {
      node.textContent = audience ? AUDIENCE_LABELS[audience] : "Audience";
    });
    document.querySelectorAll("[data-region-label]").forEach(function (node) {
      node.textContent = region ? REGION_LABELS[region] : "Not selected";
    });
  }

  function hasHcpAccess() {
    if (!state.gate) return false;
    return ["hcp", "hospital", "regulator", "institution"].indexOf(state.gate.audience) !== -1;
  }

  function hasInstitutionAudience() {
    if (!state.gate) return false;
    return ["institution", "regulator", "hospital"].indexOf(state.gate.audience) !== -1;
  }

  function hasRestrictedSession() {
    return sessionStorage.getItem("ordinateRestrictedSession") === "open";
  }

  function applyStaticLocks() {
    document.querySelectorAll("[data-requires-hcp]").forEach(function (el) {
      if (!el.getAttribute("data-original-html")) {
        el.setAttribute("data-original-html", el.innerHTML);
      }
      if (hasHcpAccess()) {
        el.classList.remove("locked-panel");
        el.innerHTML = el.getAttribute("data-original-html");
      } else {
        el.classList.add("locked-panel");
        el.innerHTML = "<h3>Healthcare professional access required</h3><p>Select a healthcare professional, hospital, clinic or regulator audience to view this material.</p><button class=\"btn\" type=\"button\" data-gate-open>Update audience</button>";
      }
    });

    document.querySelectorAll("[data-requires-institution]").forEach(function (el) {
      if (!el.getAttribute("data-original-html")) {
        el.setAttribute("data-original-html", el.innerHTML);
      }
      if (hasInstitutionAudience() && hasRestrictedSession()) {
        el.classList.remove("locked-panel");
        el.innerHTML = el.getAttribute("data-original-html");
      } else {
        el.classList.add("locked-panel");
        el.innerHTML = "<h3>Authorized institutional access required</h3><p>This content is limited to approved institutional users. Public pages do not disclose technical protocols, procurement details or mechanism depth.</p><a class=\"btn dark\" href=\"restricted-access.html\">Open restricted access</a>";
      }
    });
  }

  function renderFeaturedProducts() {
    var target = document.querySelector("[data-featured-products]");
    if (!target) return;
    var items = PRODUCTS.filter(function (p) { return p.featured; }).slice(0, 6);
    target.innerHTML = items.map(productCardMarkup).join("");
  }

  function renderMedicineCatalog() {
    var target = document.querySelector("[data-product-grid]");
    if (!target) return;

    var controls = document.querySelector("[data-medicine-controls]");
    var query = controls ? (controls.querySelector("[data-filter-search]") || {}).value || "" : "";
    var area = controls ? (controls.querySelector("[data-filter-area]") || {}).value || "all" : "all";
    var access = controls ? (controls.querySelector("[data-filter-access]") || {}).value || "all" : "all";
    var audience = controls ? (controls.querySelector("[data-filter-audience]") || {}).value || "all" : "all";
    var flags = [];
    if (controls) {
      controls.querySelectorAll("[data-filter-flag]:checked").forEach(function (input) {
        flags.push(input.value);
      });
    }

    var filtered = PRODUCTS.filter(function (p) {
      var haystack = [p.name, p.generic, p.className, p.group, p.summary, p.area.join(" "), p.access].join(" ").toLowerCase();
      if (query && haystack.indexOf(query.toLowerCase()) === -1) return false;
      if (area !== "all" && p.area.indexOf(area) === -1) return false;
      if (access !== "all" && p.accessKey !== access) return false;
      if (audience !== "all" && p.audiences.join(" ").toLowerCase().indexOf(audience.toLowerCase()) === -1) return false;
      return flags.every(function (flag) {
        if (flag === "patient-materials") return !!p.patientMaterials;
        if (flag === "hcp-info") return !!p.hcpAvailable;
        if (flag === "pigment-specific") return !!p.pigmentSpecific;
        if (flag === "restricted") return !!p.restricted || p.accessKey === "restricted" || p.accessKey === "military";
        if (flag === "safety-update") return !!p.safetyUpdate;
        if (flag === "withdrawn") return !!p.withdrawn;
        return p.tags.indexOf(flag) !== -1 || p.accessKey === flag;
      });
    });

    filtered.sort(function (a, b) { return a.name.localeCompare(b.name); });

    if (!filtered.length) {
      target.innerHTML = '<div class="empty-state">No products match the selected filters. Product availability and labeling may differ by country.</div>';
      return;
    }

    if (state.medicineMode === "area") {
      target.innerHTML = groupedProductsMarkup(filtered, function (p) { return p.area[0]; });
    } else if (state.medicineMode === "access") {
      target.innerHTML = groupedProductsMarkup(filtered, function (p) { return p.access; });
    } else {
      target.innerHTML = '<div class="grid cols-3">' + filtered.map(productCardMarkup).join("") + "</div>";
    }

    if (!controls || controls.getAttribute("data-wired") === "true") return;
    controls.setAttribute("data-wired", "true");
    controls.addEventListener("input", renderMedicineCatalog);
    controls.addEventListener("change", renderMedicineCatalog);
    document.querySelectorAll("[data-medicine-mode]").forEach(function (button) {
      button.addEventListener("click", function () {
        state.medicineMode = button.getAttribute("data-medicine-mode");
        document.querySelectorAll("[data-medicine-mode]").forEach(function (b) { b.classList.remove("active"); });
        button.classList.add("active");
        renderMedicineCatalog();
      });
    });
  }

  function groupedProductsMarkup(products, keyFn) {
    var groups = {};
    products.forEach(function (p) {
      var key = keyFn(p);
      if (!groups[key]) groups[key] = [];
      groups[key].push(p);
    });
    return Object.keys(groups).sort().map(function (key) {
      return '<section class="section"><div class="section-title"><span class="label">Group</span><h2>' + escapeHtml(key) + '</h2><p>' + groups[key].length + ' listed product(s)</p></div><div class="grid cols-3">' + groups[key].map(productCardMarkup).join("") + '</div></section>';
    }).join("");
  }

  function productCardMarkup(p) {
    var restrictedClass = p.accessKey === "military" ? " military-card" : (p.restricted ? " restricted-card" : "");
    return [
      '<article class="product-card' + restrictedClass + '">',
      '  <div class="product-card-top">',
      '    <div><h3>' + escapeHtml(p.name) + '</h3><div class="generic">' + escapeHtml(p.generic) + '</div></div>',
      '    <span class="badge ' + accessClass(p) + '">' + escapeHtml(shortAccess(p)) + '</span>',
      '  </div>',
      '  <div class="product-card-body">',
      '    <div class="label-face">' + escapeHtml(p.className) + '</div>',
      '    <p>' + escapeHtml(p.summary) + '</p>',
      '    <div class="badge-row">' + badgesForProduct(p).join("") + '</div>',
      '    <div class="product-card-footer">',
      '      <a class="btn subtle" href="product.html?id=' + encodeURIComponent(p.id) + '">Product information</a>',
      p.patientMaterials ? '      <a class="btn subtle" href="product.html?id=' + encodeURIComponent(p.id) + '#patient">Patient information</a>' : "",
      p.hcpAvailable ? '      <a class="btn subtle" href="product.html?id=' + encodeURIComponent(p.id) + '#hcp">HCP information</a>' : "",
      p.safetyUpdate ? '      <a class="btn subtle" href="product.html?id=' + encodeURIComponent(p.id) + '#safety">Safety updates</a>' : "",
      p.restricted || p.accessKey === "military" ? '      <a class="btn dark" href="restricted-access.html">Institutional access</a>' : "",
      '    </div>',
      '  </div>',
      '</article>'
    ].filter(Boolean).join("");
  }

  function badgesForProduct(p) {
    var badges = [
      '<span class="badge">' + escapeHtml(p.group) + '</span>',
      '<span class="badge ' + accessClass(p) + '">' + escapeHtml(p.access) + '</span>'
    ];
    if (p.patientMaterials) badges.push('<span class="badge pharmacy">Patient materials</span>');
    if (p.hcpAvailable) badges.push('<span class="badge hcp">HCP materials</span>');
    if (p.pigmentSpecific) badges.push('<span class="badge prescription">Pigment-specific</span>');
    if (p.safetyUpdate) badges.push('<span class="badge safety">Safety update</span>');
    if (p.restricted || p.military) badges.push('<span class="badge restricted">Restricted</span>');
    return badges;
  }

  function accessClass(p) {
    if (p.accessKey === "pharmacy") return "pharmacy";
    if (p.accessKey === "hospital") return "hospital";
    if (p.accessKey === "specialist") return "specialist";
    if (p.accessKey === "restricted") return "restricted";
    if (p.accessKey === "military") return "military";
    if (p.accessKey === "hcp") return "hcp";
    return "prescription";
  }

  function shortAccess(p) {
    if (p.accessKey === "military") return "Military";
    if (p.accessKey === "restricted") return "Restricted";
    if (p.accessKey === "hospital") return "Hospital";
    if (p.accessKey === "specialist") return "Specialist";
    if (p.accessKey === "pharmacy") return "Pharmacy";
    if (p.accessKey === "hcp") return "Safety";
    return "Rx";
  }

  function renderPigmentMatrix() {
    var target = document.querySelector("[data-pigment-matrix]");
    if (!target) return;
    var items = PRODUCTS.filter(function (p) {
      return p.pigmentSpecific || p.group === "Diagnostics / Monitoring";
    });
    target.innerHTML = [
      '<div class="table-wrap">',
      '<table class="data-table">',
      '<thead><tr><th>Product / Platform</th><th>Class</th><th>Clinical role</th><th>Access</th><th>Public detail</th></tr></thead>',
      '<tbody>',
      items.map(function (p) {
        return '<tr><td><a href="product.html?id=' + encodeURIComponent(p.id) + '"><strong>' + escapeHtml(p.name) + '</strong></a><br><span class="generic">' + escapeHtml(p.generic) + '</span></td><td>' + escapeHtml(p.className) + '</td><td>' + escapeHtml(p.summary) + '</td><td><span class="badge ' + accessClass(p) + '">' + escapeHtml(p.access) + '</span></td><td>' + publicDetailLabel(p) + '</td></tr>';
      }).join(""),
      '</tbody></table></div>'
    ].join("");
  }

  function publicDetailLabel(p) {
    if (p.accessKey === "military") return "Minimal public page";
    if (p.restricted) return "Restricted detail";
    if (p.hcpAvailable) return "Patient + HCP split";
    return "Public patient information";
  }

  function renderPipelinePreview() {
    var target = document.querySelector("[data-pipeline-preview]");
    if (!target) return;
    target.innerHTML = '<div class="grid cols-4">' + PIPELINE.slice(0, 4).map(pipelineCardMarkup).join("") + '</div>';
  }

  function renderPipeline() {
    var target = document.querySelector("[data-pipeline-table]");
    if (!target) return;
    var controls = document.querySelector("[data-pipeline-controls]");
    var phase = controls ? (controls.querySelector("[data-pipeline-phase]") || {}).value || "all" : "all";
    var area = controls ? (controls.querySelector("[data-pipeline-area]") || {}).value || "all" : "all";
    var access = controls ? (controls.querySelector("[data-pipeline-access]") || {}).value || "all" : "all";
    var status = controls ? (controls.querySelector("[data-pipeline-status]") || {}).value || "all" : "all";

    var rows = PIPELINE.filter(function (p) {
      if (phase !== "all" && p.phase !== phase) return false;
      if (area !== "all" && p.area.indexOf(area) === -1) return false;
      if (access !== "all" && p.access !== access) return false;
      if (status !== "all" && p.status !== status) return false;
      return true;
    });

    target.innerHTML = [
      '<div class="table-wrap">',
      '<table class="data-table">',
      '<thead><tr><th>Program</th><th>Name</th><th>Area</th><th>Phase</th><th>Access</th><th>Goal</th></tr></thead>',
      '<tbody>',
      rows.map(function (p) {
        return '<tr><td><strong>' + escapeHtml(p.code) + '</strong><br><span class="generic">' + escapeHtml(p.modality) + '</span></td><td>' + escapeHtml(p.name) + '</td><td>' + escapeHtml(p.area) + '</td><td><span class="badge">' + escapeHtml(p.phase) + '</span></td><td><span class="badge ' + pipelineAccessClass(p.access) + '">' + escapeHtml(p.access) + '</span></td><td>' + escapeHtml(p.goal) + '</td></tr>';
      }).join(""),
      rows.length ? "" : '<tr><td colspan="6">No pipeline programs match these filters.</td></tr>',
      '</tbody></table></div>'
    ].join("");

    if (!controls || controls.getAttribute("data-wired") === "true") return;
    controls.setAttribute("data-wired", "true");
    controls.addEventListener("change", renderPipeline);
  }

  function pipelineCardMarkup(p) {
    return '<article class="card"><span class="badge ' + pipelineAccessClass(p.access) + '">' + escapeHtml(p.phase) + '</span><h3>' + escapeHtml(p.code) + '</h3><p><strong>' + escapeHtml(p.name) + '</strong></p><p>' + escapeHtml(p.goal) + '</p></article>';
  }

  function pipelineAccessClass(access) {
    if (access === "Military") return "military";
    if (access === "Restricted") return "restricted";
    if (access === "HCP") return "hcp";
    return "prescription";
  }

  function renderProductDetail() {
    var target = document.querySelector("[data-product-detail]");
    if (!target) return;
    var id = new URLSearchParams(window.location.search).get("id") || "achromavir";
    var product = PRODUCTS.find(function (p) { return p.id === id; }) || PRODUCTS.find(function (p) { return p.id === "achromavir"; });

    document.title = product.name + " | Ordinate Therapeutics";

    if (product.id === "saturine") {
      target.innerHTML = saturineDetail(product);
    } else if ((product.restricted || product.accessKey === "military") && !hasInstitutionAudience()) {
      target.innerHTML = restrictedProductPublicDetail(product);
    } else if (product.id === "achromavir") {
      target.innerHTML = achromavirDetail(product);
    } else if (product.id === "leukostat") {
      target.innerHTML = leukostatDetail(product);
    } else {
      target.innerHTML = genericProductDetail(product);
    }
    wireTabs(target);
    applyStaticLocks();
  }

  function productHero(p, subtitle) {
    return [
      '<section class="product-detail-hero">',
      '  <div>',
      '    <div class="eyebrow">Product information</div>',
      '    <h1>' + escapeHtml(p.name) + '</h1>',
      '    <div class="generic">' + escapeHtml(p.generic) + '</div>',
      '    <p class="subtitle">' + escapeHtml(subtitle || p.summary) + '</p>',
      '    <div class="badge-row">' + badgesForProduct(p).join("") + '</div>',
      '  </div>',
      '  <div class="document-stack">',
      '    <div class="document-card"><h3>Local labeling</h3><p>Country and audience selection required.</p></div>',
      '    <div class="document-card"><h3>Medical inquiry</h3><p>Submit a product question to medical information.</p></div>',
      '    <div class="document-card"><h3>Safety reporting</h3><p>Report side effects, product complaints or activation incidents.</p></div>',
      '  </div>',
      '</section>'
    ].join("");
  }

  function tabsMarkup(p, patient, hcp, safety, regulatory, inquiry) {
    return [
      '<div class="tab-list" role="tablist">',
      '  <button class="tab-button active" type="button" data-tab="patient">Patient overview</button>',
      '  <button class="tab-button" type="button" data-tab="hcp">HCP information</button>',
      '  <button class="tab-button" type="button" data-tab="safety">Safety information</button>',
      '  <button class="tab-button" type="button" data-tab="regulatory">Regulatory documents</button>',
      '  <button class="tab-button" type="button" data-tab="inquiry">Medical inquiry</button>',
      '</div>',
      '<section class="panel" data-tab-panel="patient">' + patient + '</section>',
      '<section class="panel" data-tab-panel="hcp" hidden>' + (hasHcpAccess() ? hcp : lockedHcp()) + '</section>',
      '<section class="panel" data-tab-panel="safety" hidden>' + safety + '</section>',
      '<section class="panel" data-tab-panel="regulatory" hidden>' + regulatory + '</section>',
      '<section class="panel" data-tab-panel="inquiry" hidden>' + inquiry + '</section>'
    ].join("");
  }

  function achromavirDetail(p) {
    var patient = '<h2>Overview</h2><p>Achromavir is intended for pigment carriers who experience involuntary activation during stress, pain, sleep disruption or acute emotional overload. It is designed to support daily stability without fully blocking pigment function.</p><h3>Use contexts</h3>' + listMarkup(["School and university integration", "Work environments", "High-stress occupations", "Pain-triggered activation", "Post-trauma pigment instability", "Public visibility anxiety", "Sleep-associated glow episodes"]);
    var hcp = '<h2>HCP mechanism profile</h2><p>Achromavir supports a controlled encapsulation state around pigment expression, reducing involuntary leakage of glow and activation while allowing deliberate use under conscious focus. HCP materials include dose review, interaction watchlists and monitoring intervals.</p><div class="meta-list">' + metaRow("Review interval", "Periodic licensed clinician review trained in pigment medicine") + metaRow("Interaction watch", "Leukostat, Paxlumen, Chromafinil-class restricted medicines") + metaRow("Documentation", "Activation diary, missed therapy events, safety reports") + '</div>';
    var safety = '<h2>Safety</h2><div class="safety-banner"><p>Contact a healthcare professional if the patient experiences unexpected full blockade, breakthrough activation, severe fatigue, loss of conscious access, neurological symptoms, activation during sleep, symptoms after missed therapy or interaction with Leukostat or restricted coordinate medicines.</p></div><p><a class="btn danger" href="report-adverse-event.html">Report an adverse event</a></p>';
    var regulatory = documentList(["Patient guide", "HCP prescribing document", "Local risk-management plan", "Medication guide for schools and employers"]);
    var inquiry = medicalInquiryBlock(p);
    return productHero(p, "Maintenance suppressor for voluntary pigment stability") + '<div class="detail-layout"><div>' + tabsMarkup(p, patient, hcp, safety, regulatory, inquiry) + '</div>' + relatedPanel(p) + '</div>';
  }

  function leukostatDetail(p) {
    var patient = '<h2>Overview</h2><p>Leukostat is a prescription pigment blocker used when temporary full suppression of pigment functionality is medically, procedurally or legally required.</p><h3>Use contexts</h3>' + listMarkup(["Surgery", "Emergency stabilization", "High-risk work environments", "Voluntary temporary suppression", "Legal or institutional medical protocols", "Procedures where accidental activation is dangerous"]) + '<div class="safety-banner"><p>Leukostat should not be used as a social compliance tool outside approved medical or legal frameworks.</p></div>';
    var hcp = '<h2>HCP information</h2><p>HCP materials emphasize consent pathway documentation, supervision requirements, return-of-access assessment and incident reporting for excessive blockade or failure to suppress.</p>' + metaRow("Clinical posture", "Cold, regulated, non-promotional") + metaRow("Ethics watch", "Voluntary treatment versus institutional pressure") + metaRow("Related protocol", "Pallidex only for emergency deactivation under authorized protocols");
    var safety = '<h2>Safety</h2><p>Report unexpected blockade duration, loss of conscious access after expected return, breakthrough activation, neurological symptoms or any non-consensual administration concern.</p><p><a class="btn danger" href="report-adverse-event.html">Report an adverse event</a></p>';
    var regulatory = documentList(["HCP prescribing document", "Consent and medical supervision guide", "Institutional use framework", "Safety communication archive"]);
    var inquiry = medicalInquiryBlock(p);
    return productHero(p, "Temporary pigment blockade under regulated medical supervision") + '<div class="detail-layout"><div>' + tabsMarkup(p, patient, hcp, safety, regulatory, inquiry) + '</div>' + relatedPanel(p) + '</div>';
  }

  function saturineDetail(p) {
    var institutionBlock = hasInstitutionAudience()
      ? '<div class="locked-panel"><h3>Institutional audience recognized</h3><p>Public technical documentation remains restricted. Approved programs must use the institutional inquiry pathway. No mechanism, protocol, procurement or field-use details are displayed on this public site.</p></div>'
      : '<div class="locked-panel"><h3>Authorized institutional access only</h3><p>Select an authorized institution audience and submit a restricted access inquiry to proceed. No patient materials are available.</p><button class="btn" type="button" data-gate-open>Update audience</button></div>';
    return [
      '<section class="product-detail-hero">',
      '  <div>',
      '    <div class="eyebrow">Restricted product public page</div>',
      '    <h1>Saturine</h1>',
      '    <div class="generic">restricted coordinate modifier</div>',
      '    <p class="subtitle">Access to this product is limited to authorized military medical programs and approved institutional protocols.</p>',
      '    <div class="badge-row"><span class="badge military">Military / strict control</span><span class="badge restricted">No patient materials</span><span class="badge restricted">Technical documentation restricted</span></div>',
      '  </div>',
      '  <div class="restricted-panel"><h3>Public information is limited</h3><p>Saturine is a coordinate-modifying therapy developed for controlled operational contexts where temporary expansion of pigment expression is required under strict supervision.</p><a class="btn primary" href="restricted-access.html">Authorized institutional access</a></div>',
      '</section>',
      '<div class="split">',
      '  <section class="panel"><h2>Public statement</h2><p>No public mechanism details are provided. No pharmacy access exists. No general audience product education is available.</p><p>All safety, quality and incident information must be submitted through authorized institutional channels or local emergency systems.</p></section>',
      institutionBlock,
      '</div>'
    ].join("");
  }

  function restrictedProductPublicDetail(p) {
    return [
      productHero(p, p.summary),
      '<section class="restricted-panel">',
      '<h2>Public information is limited</h2>',
      '<p>This product is restricted to authorized institutional users. Public pages do not include mechanism details, operating protocols, procurement routes or training documents.</p>',
      '<a class="btn primary" href="restricted-access.html">Authorized institutional inquiry only</a>',
      '</section>'
    ].join("");
  }

  function genericProductDetail(p) {
    var patient = '<h2>Patient overview</h2><p>' + escapeHtml(p.summary) + '</p><p>' + escapeHtml(p.clinicalRole) + '</p>';
    var hcp = '<h2>HCP information</h2><div class="meta-list">' + metaRow("Class", p.className) + metaRow("Monitoring", p.monitoring) + metaRow("Contraindications", p.contraindications) + '</div>';
    var safety = '<h2>Safety information</h2><p>Report suspected side effects, medication errors, product quality complaints or pigment-specific incidents through Ordinate safety reporting.</p><p><a class="btn danger" href="report-adverse-event.html">Report an adverse event</a></p>';
    var regulatory = documentList(["Patient leaflet by country", "HCP prescribing document where available", "Product quality statement", "Local labeling status"]);
    var inquiry = medicalInquiryBlock(p);
    return productHero(p, p.summary) + '<div class="detail-layout"><div>' + tabsMarkup(p, patient, hcp, safety, regulatory, inquiry) + '</div>' + relatedPanel(p) + '</div>';
  }

  function lockedHcp() {
    return '<div class="locked-panel"><h2>HCP access required</h2><p>Detailed prescribing, dosing, mechanism and interaction content is available only after selecting a healthcare professional or institutional audience.</p><button class="btn" type="button" data-gate-open>Update audience</button></div>';
  }

  function relatedPanel(p) {
    var related = (p.related || []).map(function (id) {
      return PRODUCTS.find(function (candidate) { return candidate.id === id; });
    }).filter(Boolean);
    return '<aside class="panel"><h3>Related products</h3><div class="link-list">' + related.map(function (item) {
      return '<a class="link-item" href="product.html?id=' + encodeURIComponent(item.id) + '"><h3>' + escapeHtml(item.name) + '</h3><p>' + escapeHtml(item.className) + '</p></a>';
    }).join("") + '</div></aside>';
  }

  function medicalInquiryBlock(p) {
    return '<h2>Medical inquiry</h2><p>Submit product questions to Medical Information. Emergency safety concerns should be reported through local emergency services and Ordinate safety reporting.</p><a class="btn primary" href="medical-information.html?product=' + encodeURIComponent(p.id) + '">Submit medical inquiry</a>';
  }

  function documentList(items) {
    return '<h2>Regulatory documents</h2><div class="document-stack">' + items.map(function (item) {
      return '<div class="document-card"><h3>' + escapeHtml(item) + '</h3><p>Availability depends on country, indication and audience.</p></div>';
    }).join("") + '</div>';
  }

  function listMarkup(items) {
    return '<ul>' + items.map(function (item) { return '<li>' + escapeHtml(item) + '</li>'; }).join("") + '</ul>';
  }

  function metaRow(label, value) {
    return '<div class="meta-row"><span class="label">' + escapeHtml(label) + '</span><span>' + escapeHtml(value) + '</span></div>';
  }

  function wireTabs(root) {
    root.querySelectorAll("[data-tab]").forEach(function (button) {
      button.addEventListener("click", function () {
        var tab = button.getAttribute("data-tab");
        root.querySelectorAll("[data-tab]").forEach(function (b) { b.classList.remove("active"); });
        root.querySelectorAll("[data-tab-panel]").forEach(function (panel) {
          panel.hidden = panel.getAttribute("data-tab-panel") !== tab;
        });
        button.classList.add("active");
      });
    });
  }

  function renderMedicalSearch() {
    var target = document.querySelector("[data-medical-product-results]");
    if (!target) return;
    var input = document.querySelector("[data-medical-product-search]");
    var selected = new URLSearchParams(window.location.search).get("product") || "";
    if (input && selected) input.value = selected;

    function update() {
      var q = input ? input.value.toLowerCase() : "";
      var results = PRODUCTS.filter(function (p) {
        return !q || [p.id, p.name, p.generic, p.className].join(" ").toLowerCase().indexOf(q) !== -1;
      }).slice(0, 8);
      target.innerHTML = results.map(function (p) {
        return '<div class="document-card"><h3>' + escapeHtml(p.name) + '</h3><p>' + escapeHtml(p.generic) + '</p><div class="button-row"><a class="btn subtle" href="product.html?id=' + encodeURIComponent(p.id) + '">Product page</a><a class="btn subtle" href="product.html?id=' + encodeURIComponent(p.id) + '#hcp">HCP document</a><a class="btn subtle" href="product.html?id=' + encodeURIComponent(p.id) + '#patient">Patient leaflet</a></div></div>';
      }).join("");
    }

    if (input && input.getAttribute("data-wired") !== "true") {
      input.setAttribute("data-wired", "true");
      input.addEventListener("input", update);
    }
    update();
  }

  function wireForms() {
    document.querySelectorAll("form[data-form-type]").forEach(function (form) {
      if (form.getAttribute("data-wired") === "true") return;
      form.setAttribute("data-wired", "true");
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var missing = [];
        form.querySelectorAll("[required]").forEach(function (field) {
          if (!String(field.value || "").trim()) {
            missing.push(field.getAttribute("name") || field.id || "required field");
          }
        });
        var result = form.querySelector("[data-form-result]");
        if (!result) {
          result = document.createElement("div");
          result.setAttribute("data-form-result", "");
          form.appendChild(result);
        }
        if (missing.length) {
          result.className = "error-box";
          result.textContent = "Please complete required fields: " + missing.join(", ") + ".";
          return;
        }
        var type = form.getAttribute("data-form-type").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
        var confirmation = "OTX-" + type + "-" + dateStamp() + "-" + Math.random().toString(36).slice(2, 7).toUpperCase();
        result.className = "success-box";
        result.innerHTML = "<strong>Report captured locally.</strong><br>Confirmation ID: " + confirmation + "<br>No data has been transmitted from this static demonstration.";
        form.reset();
      });
    });
  }

  function wireRestrictedAccess() {
    var form = document.querySelector("[data-restricted-access-form]");
    var portal = document.querySelector("[data-restricted-portal]");
    if (!form && !portal) return;

    function renderPortal() {
      if (!portal) return;
      var open = hasRestrictedSession();
      portal.innerHTML = [
        '<div class="portal-status ' + (open ? "open" : "") + '">' + (open ? "Restricted demo session open" : "Restricted demo session closed") + '</div>',
        open ? '<div class="panel"><h3>Institutional document index</h3><p>Public-safe index only. Technical protocols, procurement terms and field-use procedures are not shown.</p><div class="document-stack"><div class="document-card"><h3>Safety intake routing</h3><p>Use restricted product incident reporting for suspected exposure, quality defects or unauthorized handling.</p></div><div class="document-card"><h3>Authorized inquiry status</h3><p>Requests remain subject to local law, institutional authorization and medical review.</p></div></div></div>' : ''
      ].join("");
    }

    renderPortal();

    if (!form || form.getAttribute("data-wired") === "true") return;
    form.setAttribute("data-wired", "true");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var result = form.querySelector("[data-form-result]");
      if (!result) {
        result = document.createElement("div");
        result.setAttribute("data-form-result", "");
        form.appendChild(result);
      }
      if (!hasInstitutionAudience()) {
        result.className = "error-box";
        result.innerHTML = "Select hospital, regulator or authorized institution audience before opening a restricted demo session. <button class=\"btn\" type=\"button\" data-gate-open>Update audience</button>";
        return;
      }
      var missing = [];
      form.querySelectorAll("[required]").forEach(function (field) {
        if (!String(field.value || "").trim()) missing.push(field.getAttribute("name") || field.id);
      });
      if (missing.length) {
        result.className = "error-box";
        result.textContent = "Please complete required fields: " + missing.join(", ") + ".";
        return;
      }
      sessionStorage.setItem("ordinateRestrictedSession", "open");
      result.className = "success-box";
      result.textContent = "Restricted demo session opened for this browser tab. No credentials or data were transmitted.";
      renderPortal();
    });
  }

  function dateStamp() {
    var d = new Date();
    return d.getFullYear().toString() + pad(d.getMonth() + 1) + pad(d.getDate());
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  window.Ordinate = {
    products: PRODUCTS,
    pipeline: PIPELINE,
    resetAudienceGate: function () {
      localStorage.removeItem("ordinateAudienceGate");
      sessionStorage.removeItem("ordinateRestrictedSession");
      state.gate = null;
      updateAudienceLabels();
      showGate(true);
    }
  };
})();
