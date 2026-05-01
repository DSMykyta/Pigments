/* ============================================================
   ORDINATE THERAPEUTICS — Unified site script
   Single file: data + chrome + interactivity
   ============================================================ */
(function () {
  'use strict';

  /* ============================================================
     1. DATA — 32 products with Chromacare-level specificity
     ============================================================ */
  var PRODUCTS = [
    /* ---- A. General Medicine (Level 1) ---- */
    {
      id: 'neurocalm', name: 'Neurocalm', generic: 'neurocalm mesylate',
      className: 'Anxiolytic neuromodulator', group: 'General Medicine',
      area: ['Neurology'], access: 'Prescription', accessKey: 'prescription',
      audiences: ['Patients', 'Healthcare Professionals'],
      tags: ['prescription', 'patient', 'hcp', 'patient-materials', 'hcp-info'],
      summary: 'For chronic anxiety and stress states, including patients in whom stress provokes somatic and pigment-associated reactions.',
      clinicalRole: 'A broad outpatient anxiolytic giving Ordinate a conventional neurology and mental-health footprint.',
      mechanism: 'Central inhibitory neuromodulator with low sedative bias. Compatible with maintenance pigment suppressors at standard doses.',
      indications: ['Chronic anxiety states', 'Generalized anxiety disorder', 'Stress-induced somatic symptoms', 'Stress-driven involuntary pigment activation, in conjunction with appropriate pigment medicine'],
      contraindications: ['Known hypersensitivity', 'Acute intoxication unless supervised', 'Severe hepatic impairment'],
      monitoring: ['Sedation and driving risk', 'Concurrent CNS-active medicines', 'Stress-flare patterns'],
      dosing: '5 / 10 / 15 mg oral · once daily',
      form: 'Film-coated tablet',
      routes: ['Oral'],
      reimbursement: ['EU', 'UK', 'JP', 'UA', 'US'],
      hsvNotes: 'No direct pigment action. Reduces stress-driven activation triggers across the hue spectrum.',
      registryIds: ['EMA/H/C/4421/0001', 'EU PV-2018-OTH-NCM'],
      citations: [{ ref: 'Lancet Psychiatry 2021;8(4):314–326', title: 'Long-term safety of neurocalm mesylate in mixed pigment and non-pigment populations.' }],
      documentIds: ['OTH-PI-NCM-2025-EU', 'OTH-PIL-NCM-2025-UA'],
      image: 'assets/images/product-pack-neurocalm.png',
      relatedIds: ['somnara', 'paxlumen', 'myosteady'],
      featured: true
    },
    {
      id: 'somnara', name: 'Somnara', generic: 'somnara tartrate',
      className: 'Sleep rhythm stabilizer', group: 'General Medicine',
      area: ['Neurology', 'Recovery'], access: 'Prescription / specialist use', accessKey: 'specialist',
      audiences: ['Patients', 'Healthcare Professionals'],
      tags: ['prescription', 'specialist', 'patient', 'hcp', 'patient-materials', 'hcp-info'],
      summary: 'For sleep disturbance, nocturnal nervous-system hyperactivation and circadian disruption.',
      clinicalRole: 'Used where sleep loss amplifies neurological instability or risk of nocturnal pigment activation.',
      mechanism: 'Selective rhythm-phase modulator without classic benzodiazepine activity.',
      indications: ['Chronic primary insomnia', 'Nocturnal hyperarousal in pigment carriers', 'Circadian phase disruption'],
      contraindications: ['Untreated severe respiratory suppression', 'Parasomnia with injury risk'],
      monitoring: ['Daytime impairment', 'Nocturnal activation episodes', 'Concurrent sedatives'],
      dosing: '2 / 4 mg oral · once nightly',
      form: 'Film-coated tablet',
      routes: ['Oral'],
      reimbursement: ['EU', 'UK', 'JP', 'UA'],
      hsvNotes: 'Indirect benefit on sleep-associated involuntary activation in carriers across all hues.',
      registryIds: ['EMA/H/C/4421/0014'],
      citations: [{ ref: 'Sleep 2022;45(8):zsac104', title: 'Somnara in pigment-carrier insomnia: 24-month observational data.' }],
      documentIds: ['OTH-PI-SMN-2025-EU'],
      relatedIds: ['neurocalm', 'paxlumen', 'lumentrace']
    },
    {
      id: 'dolvenor', name: 'Dolvenor', generic: 'dolvenor sodium',
      className: 'Anti-inflammatory analgesic', group: 'General Medicine',
      area: ['Pain & Inflammation'], access: 'Pharmacy / prescription by market', accessKey: 'pharmacy',
      audiences: ['Patients', 'Healthcare Professionals'],
      tags: ['pharmacy', 'prescription', 'patient', 'patient-materials'],
      summary: 'For pain, inflammation, sport injuries and muscular overuse.',
      clinicalRole: 'A conventional analgesic/anti-inflammatory with market-dependent labeling.',
      mechanism: 'Selective inflammatory mediator inhibitor.',
      indications: ['Acute and chronic musculoskeletal pain', 'Sport-related soft-tissue injury', 'Mild to moderate inflammatory states'],
      contraindications: ['Severe NSAID hypersensitivity', 'Active GI bleeding', 'Severe renal impairment'],
      monitoring: ['Gastric tolerance', 'Renal function in long-term use', 'Anticoagulant interactions'],
      dosing: '200 / 400 mg oral · up to 3× daily',
      form: 'Film-coated tablet · oral suspension',
      routes: ['Oral'],
      reimbursement: ['EU', 'UK', 'JP', 'UA', 'US'],
      hsvNotes: 'Relevant to carriers in red-domain (Ataka) sport medicine for soft-tissue inflammation.',
      registryIds: ['EMA/H/C/4421/0033'],
      citations: [],
      documentIds: ['OTH-PIL-DLV-2025-EU'],
      relatedIds: ['kinetra', 'myosteady', 'dermavax']
    },
    {
      id: 'myosteady', name: 'Myosteady', generic: 'myosteady chloride',
      className: 'Muscle tone regulator', group: 'General Medicine',
      area: ['Neurology', 'Recovery'], access: 'Prescription', accessKey: 'prescription',
      audiences: ['Patients', 'Healthcare Professionals'],
      tags: ['prescription', 'patient', 'hcp', 'patient-materials', 'hcp-info'],
      summary: 'For tremor, spasms and muscle instability following neurological overload or injury.',
      clinicalRole: 'Supports rehabilitation where motor tone interrupts daily function.',
      mechanism: 'Peripheral motor-tone normalization with mild central inhibitory effect.',
      indications: ['Post-traumatic tremor', 'Muscle spasm states', 'Post-pigment-exertion myotonic instability'],
      contraindications: ['Acute weakness of unknown origin', 'Unstable neuromuscular disease without specialist review'],
      monitoring: ['Falls risk', 'Sedation', 'Physical therapy outcomes'],
      dosing: '5 / 10 mg oral · 2–3× daily',
      form: 'Tablet',
      routes: ['Oral'],
      reimbursement: ['EU', 'UK', 'JP'],
      hsvNotes: 'Synergistic with Kinetra in carriers with high V (concrete-physical) hue use after exertion.',
      registryIds: ['EMA/H/C/4421/0040'],
      citations: [],
      documentIds: ['OTH-PI-MYS-2025-EU'],
      relatedIds: ['kinetra', 'synaptide-p', 'dolvenor']
    },
    {
      id: 'cardevia', name: 'Cardevia', generic: 'cardevia besylate',
      className: 'Cardiovascular stabilizer', group: 'General Medicine',
      area: ['Cardiovascular & Metabolic'], access: 'Prescription', accessKey: 'prescription',
      audiences: ['Patients', 'Healthcare Professionals'],
      tags: ['prescription', 'patient', 'hcp', 'patient-materials', 'hcp-info'],
      summary: 'Blood-pressure control, cardiovascular prevention and stress-induced cardiac load.',
      clinicalRole: 'Conventional chronic-care medicine for non-pigment and pigment patients.',
      mechanism: 'Calcium-channel-modulating cardiovascular stabilizer.',
      indications: ['Essential hypertension', 'Stress-driven hypertensive episodes'],
      contraindications: ['Unstable hypotension', 'Severe conduction disorders'],
      monitoring: ['Blood pressure', 'Heart rate', 'Electrolytes'],
      dosing: '5 / 10 mg oral · once daily',
      form: 'Film-coated tablet',
      routes: ['Oral'],
      reimbursement: ['EU', 'UK', 'JP', 'UA', 'US'],
      hsvNotes: 'Indirect benefit on stress-driven cardiovascular episodes in pigment carriers.',
      registryIds: ['EMA/H/C/4421/0051'],
      citations: [],
      documentIds: ['OTH-PI-CDV-2025-EU'],
      relatedIds: ['glycora', 'neurocalm']
    },
    {
      id: 'glycora', name: 'Glycora', generic: 'glycora fumarate',
      className: 'Metabolic therapy', group: 'General Medicine',
      area: ['Cardiovascular & Metabolic'], access: 'Prescription', accessKey: 'prescription',
      audiences: ['Patients', 'Healthcare Professionals'],
      tags: ['prescription', 'patient', 'hcp', 'patient-materials', 'hcp-info'],
      summary: 'For metabolic disturbances, insulin resistance and energy-exchange control.',
      clinicalRole: 'Platform metabolic therapy used across ordinary chronic care.',
      mechanism: 'Insulin-sensitization and metabolic-flux normalizer.',
      indications: ['Type II diabetes mellitus', 'Insulin resistance syndromes'],
      contraindications: ['Acute metabolic decompensation outside hospital supervision'],
      monitoring: ['Glucose metrics', 'Renal function', 'Hypoglycemia risk'],
      dosing: '500 / 1000 mg oral · 1–2× daily',
      form: 'Tablet',
      routes: ['Oral'],
      reimbursement: ['EU', 'UK', 'JP', 'UA'],
      hsvNotes: 'No pigment-specific action. Compatible with all maintenance suppressors.',
      registryIds: ['EMA/H/C/4421/0064'],
      citations: [],
      documentIds: ['OTH-PIL-GLC-2025-EU'],
      relatedIds: ['cardevia']
    },
    {
      id: 'respivar', name: 'Respivar', generic: 'respivar furoate',
      className: 'Respiratory anti-inflammatory', group: 'General Medicine',
      area: ['Pain & Inflammation'], access: 'Prescription', accessKey: 'prescription',
      audiences: ['Patients', 'Healthcare Professionals'],
      tags: ['prescription', 'patient', 'hcp', 'patient-materials'],
      summary: 'Chronic airway inflammation, asthmatic states and post-exposure irritation (smoke, dust, industrial).',
      clinicalRole: 'Conventional inhaled respiratory therapy.',
      mechanism: 'Local anti-inflammatory glucocorticoid analog.',
      indications: ['Chronic airway inflammation', 'Asthmatic states'],
      contraindications: ['Active untreated respiratory infection'],
      monitoring: ['Inhaler technique', 'Long-term steroid effects'],
      dosing: '100 / 250 mcg inhalation · 2× daily',
      form: 'Metered-dose inhaler',
      routes: ['Inhaled'],
      reimbursement: ['EU', 'UK', 'JP', 'UA'],
      hsvNotes: 'Relevant to carriers exposed to combustion or industrial particulate during pigment-related occupational use.',
      registryIds: ['EMA/H/C/4421/0078'],
      citations: [],
      documentIds: ['OTH-PIL-RSP-2025-EU'],
      relatedIds: ['dolvenor']
    },
    {
      id: 'dermavax', name: 'Dermavax', generic: 'dermavax barrier complex',
      className: 'Dermatological barrier therapy', group: 'General Medicine',
      area: ['Dermatology'], access: 'Pharmacy / prescription', accessKey: 'pharmacy',
      audiences: ['Patients'],
      tags: ['pharmacy', 'patient', 'patient-materials'],
      summary: 'For skin damage, irritation, photosensitivity and contact dermatitis.',
      clinicalRole: 'Broad dermatology product available across pharmacy channels.',
      mechanism: 'Lipid-barrier reconstruction with ceramide complex.',
      indications: ['Contact dermatitis', 'Photosensitive skin', 'Post-irritation barrier repair'],
      contraindications: ['Open infected wounds'],
      monitoring: ['Skin tolerability'],
      dosing: 'Topical · apply 2× daily',
      form: 'Cream 30 g · 100 g',
      routes: ['Topical'],
      reimbursement: ['EU', 'UK', 'UA'],
      hsvNotes: 'Relevant to carriers with photosensitivity reactions to high-saturation glow expression.',
      registryIds: ['EMA/H/C/4421/0091'],
      citations: [],
      documentIds: ['OTH-PIL-DVX-2025-EU'],
      relatedIds: ['dermalux']
    },

    /* ---- B. Hospital / Acute Care (Level 2) ---- */
    {
      id: 'hemovance', name: 'Hemovance', generic: 'hemovance hemostatic',
      className: 'Acute hemostatic support', group: 'Hospital & Acute Care',
      area: ['Acute Care'], access: 'Hospital only', accessKey: 'hospital',
      audiences: ['Healthcare Professionals', 'Institutions'],
      tags: ['hospital', 'hcp', 'hcp-info'],
      summary: 'Acute hemostatic adjunct for surgical and trauma settings.',
      clinicalRole: 'Hospital-supplied adjunct to surgical and pre-hospital hemorrhage control.',
      mechanism: 'Recombinant coagulation-factor stabilizer.',
      indications: ['Acute surgical hemorrhage', 'Trauma-associated coagulopathy'],
      contraindications: ['Known thrombophilia without specialist guidance'],
      monitoring: ['Coagulation parameters', 'Thrombotic risk'],
      dosing: '40 IU/kg IV · per protocol',
      form: 'Lyophilized vial 500 IU · 1000 IU',
      routes: ['IV'],
      reimbursement: ['EU', 'UK', 'JP'],
      hsvNotes: 'Standard hemostatic. No pigment-specific consideration.',
      registryIds: ['EMA/H/C/4421/0102'],
      citations: [{ ref: 'NEJM 2020;382(11):1031–1042', title: 'Hemovance in pre-hospital trauma resuscitation: a multicenter trial.' }],
      documentIds: ['OTH-HSP-HMV-2025-EU'],
      image: 'assets/images/product-pack-hemovance.png',
      relatedIds: ['traumexin', 'seizuril']
    },
    {
      id: 'seizuril', name: 'Seizuril', generic: 'seizuril sodium',
      className: 'Acute neurostabilizer', group: 'Hospital & Acute Care',
      area: ['Acute Care', 'Neurology'], access: 'Hospital only', accessKey: 'hospital',
      audiences: ['Healthcare Professionals'],
      tags: ['hospital', 'hcp', 'hcp-info'],
      summary: 'Seizure control and acute neurological hyperactivation in emergency settings.',
      clinicalRole: 'Emergency neurostabilizer for both seizure activity and acute pigment-driven hyperactivation.',
      mechanism: 'Rapid-onset GABAergic neurostabilizer.',
      indications: ['Status epilepticus', 'Acute pigment-associated hyperactivation'],
      contraindications: ['Known severe sensitivity'],
      monitoring: ['Cardiorespiratory parameters', 'EEG when available'],
      dosing: '2–4 mg IV bolus · per protocol',
      form: 'Solution for injection 2 mg/mL',
      routes: ['IV', 'IM'],
      reimbursement: ['EU', 'UK', 'JP'],
      hsvNotes: 'Used in hue-spanning acute hyperactivation; not a substitute for Pallidex emergency deactivation.',
      registryIds: ['EMA/H/C/4421/0118'],
      citations: [],
      documentIds: ['OTH-HSP-SZR-2025-EU'],
      relatedIds: ['hemovance', 'traumexin']
    },
    {
      id: 'traumexin', name: 'Traumexin', generic: 'traumexin compound',
      className: 'Trauma inflammation modulator', group: 'Hospital & Acute Care',
      area: ['Acute Care', 'Pain & Inflammation'], access: 'Hospital only', accessKey: 'hospital',
      audiences: ['Healthcare Professionals'],
      tags: ['hospital', 'hcp', 'hcp-info'],
      summary: 'For severe trauma, multi-organ inflammation and post-surgical complications.',
      clinicalRole: 'ICU-grade inflammation modulator for poly-trauma.',
      mechanism: 'Multi-cytokine modulator with rapid onset.',
      indications: ['Severe trauma', 'Multi-organ inflammatory syndromes'],
      contraindications: ['Active uncontrolled infection'],
      monitoring: ['Inflammatory markers', 'Hepatic and renal function'],
      dosing: 'IV per ICU protocol',
      form: 'Solution for IV infusion',
      routes: ['IV'],
      reimbursement: ['EU', 'UK', 'JP'],
      hsvNotes: 'Used in poly-trauma cases regardless of carrier status.',
      registryIds: ['EMA/H/C/4421/0125'],
      citations: [],
      documentIds: ['OTH-HSP-TRX-2025-EU'],
      relatedIds: ['hemovance', 'burnaxis']
    },
    {
      id: 'nocirel', name: 'Nocirel', generic: 'nocirel adjunct',
      className: 'Procedural pain control adjunct', group: 'Hospital & Acute Care',
      area: ['Acute Care', 'Pain & Inflammation'], access: 'Hospital only', accessKey: 'hospital',
      audiences: ['Healthcare Professionals'],
      tags: ['hospital', 'hcp', 'hcp-info'],
      summary: 'Adjunct pain management for surgical and procedural settings.',
      clinicalRole: 'Opioid-sparing procedural pain adjunct.',
      mechanism: 'Multi-modal analgesic adjunct.',
      indications: ['Peri-procedural pain', 'Post-operative analgesia'],
      contraindications: ['Severe respiratory depression'],
      monitoring: ['Respiratory rate', 'Sedation level'],
      dosing: 'IV per anesthetic protocol',
      form: 'Solution for injection',
      routes: ['IV'],
      reimbursement: ['EU', 'UK', 'JP'],
      hsvNotes: 'No pigment-specific consideration; supports peri-operative care across all carriers.',
      registryIds: ['EMA/H/C/4421/0140'],
      citations: [],
      documentIds: ['OTH-HSP-NCR-2025-EU'],
      relatedIds: ['traumexin', 'hemovance']
    },
    {
      id: 'burnaxis', name: 'Burnaxis', generic: 'burnaxis tissue support',
      className: 'Tissue repair support', group: 'Hospital & Acute Care',
      area: ['Acute Care', 'Dermatology'], access: 'Hospital / specialist prescription', accessKey: 'specialist',
      audiences: ['Healthcare Professionals'],
      tags: ['hospital', 'specialist', 'hcp', 'hcp-info'],
      summary: 'For burns, thermal injury and tissue damage following extreme physical load.',
      clinicalRole: 'Hospital-grade tissue-repair adjunct.',
      mechanism: 'Recombinant tissue-regenerative complex.',
      indications: ['Burn injury', 'Severe soft-tissue damage'],
      contraindications: ['Active infected wound without antimicrobial cover'],
      monitoring: ['Wound healing trajectory', 'Infection signs'],
      dosing: 'Topical / subcutaneous · per protocol',
      form: 'Sterile gel 30 g · sterile dressing',
      routes: ['Topical', 'Subcutaneous'],
      reimbursement: ['EU', 'UK'],
      hsvNotes: 'Relevant to carriers with tissue damage following high-V (concrete-physical) pigment exertion.',
      registryIds: ['EMA/H/C/4421/0153'],
      citations: [],
      documentIds: ['OTH-HSP-BRX-2025-EU'],
      relatedIds: ['traumexin', 'dermavax']
    },

    /* ---- C. Pigment Integration Medicine (Level 3) ---- */
    {
      id: 'achromavir', name: 'Achromavir', generic: 'achromavir complex',
      className: 'Maintenance suppressor', group: 'Pigment Integration',
      area: ['Pigment Stability'], access: 'Prescription / daily therapy', accessKey: 'prescription',
      audiences: ['Patients', 'Healthcare Professionals'],
      tags: ['prescription', 'patient', 'hcp', 'patient-materials', 'hcp-info', 'pigment-specific'],
      summary: 'Maintenance suppressor for voluntary pigment stability and reduction of involuntary activation episodes.',
      clinicalRole: 'Sits between everyday lifestyle management and full pigment blockade. Not designed for forced suppression, tactical enhancement or as a substitute for emergency deactivation.',
      mechanism: 'Supports a controlled "encapsulation" state around pigment expression, reducing involuntary leakage of glow and activation while allowing deliberate use under conscious focus. Acts on central neurological regulation pathways and peripheral coordinate signaling. 89% of patients retain full conscious activation in clinical follow-up.',
      indications: ['Adult pigment carriers with documented involuntary activation episodes related to stress, pain, sleep disruption or acute emotional load', 'School and university integration', 'Public-facing work environments', 'High-stress occupations', 'Post-trauma pigment instability', 'Sleep-associated glow episodes'],
      contraindications: ['Concurrent Leukostat or Pallidex therapy', 'History of severe blockade reaction to maintenance suppressors', 'Restricted coordinate-modulating therapies in past 30 days unless under institutional protocol'],
      monitoring: ['Activation log review every 90 days', 'AxisMap Dx or equivalent at 6 and 12 months', 'Concurrent stimulant or sleep therapy review'],
      dosing: '5 / 10 / 15 mg oral · once daily',
      form: 'Film-coated tablet',
      routes: ['Oral'],
      reimbursement: ['EU', 'UK', 'JP', 'UA', 'US'],
      hsvNotes: 'Effective across hue spectrum. Reduced effect in V<20 (high-abstraction) hue use; not indicated for that range. No interaction with H domain in standard population.',
      registryIds: ['EMA/H/C/4421/0001-ACR', 'EU PV-2007-OTH-ACR'],
      citations: [
        { ref: 'NEJM 2019;381(14):1312–1324', title: 'Achromavir for chronic pigment suppression: a 15-year follow-up.' },
        { ref: 'Pigment Med 2023;14(2):88–101', title: 'Real-world activation reduction with achromavir maintenance therapy.' }
      ],
      documentIds: ['OTH-PI-ACR-2025-EU', 'OTH-PIL-ACR-2025-UA', 'OTH-SmPC-ACR-2025-EU'],
      image: 'assets/images/product-pack-achromavir.png',
      relatedIds: ['leukostat', 'axisol', 'paxlumen', 'lumentrace'],
      featured: true
    },
    {
      id: 'leukostat', name: 'Leukostat', generic: 'leukostatic coordinate blocker',
      className: 'Pigment blocker', group: 'Pigment Integration',
      access: 'Prescription / regulated medical supervision', accessKey: 'specialist',
      area: ['Pigment Suppression'],
      audiences: ['Patients', 'Healthcare Professionals'],
      tags: ['prescription', 'specialist', 'hcp', 'patient', 'patient-materials', 'hcp-info', 'pigment-specific'],
      summary: 'Temporary pigment blockade under regulated medical supervision. For clinically, procedurally or legally indicated full suppression.',
      clinicalRole: 'For surgery, emergency stabilization, regulated suppression and short, supervised, time-bounded use only. Not for long-term lifestyle suppression.',
      mechanism: 'Induces a temporary leukostatic coordinate state by contracting the carrier\'s expressed coordinates toward the achromatic center. Conscious activation is not possible during effect; involuntary activation is suppressed. Recovery to baseline occurs over a defined elimination window.',
      indications: ['Surgery and emergency stabilization', 'High-risk work environments where accidental activation poses immediate danger', 'Voluntary, time-bounded suppression for medical reasons', 'Legally authorized institutional medical protocols', 'Medical procedures requiring complete pigment quiescence'],
      contraindications: ['Pregnancy unless benefit clearly outweighs risk and protocol approved', 'Concurrent Achromavir or Pallidex use within 14 days unless institutional protocol', 'Restricted coordinate modifier exposure within 30 days', 'Severe hepatic impairment'],
      monitoring: ['Continuous medical supervision throughout treatment', 'Pre-treatment AxisMap Dx and post-treatment review', 'Clear documentation of indication and treatment window', 'Patient communication regarding return of function'],
      dosing: '2.5 mg/mL IV/IM · 4–12 hour effect window',
      form: 'Solution for injection · pre-filled syringe',
      routes: ['IV', 'IM'],
      reimbursement: ['EU', 'UK', 'JP'],
      hsvNotes: 'Stretches all hue and saturation coordinates toward V→95 achromatic center. Effect is reversible. Not effective for V<20 use; that range falls outside Ordinate pharmacology.',
      registryIds: ['EMA/H/C/4421/0010-LKS', 'EU PV-2009-OTH-LKS'],
      citations: [
        { ref: 'Pigment Med 2021;12(4):201–214', title: 'Supervised Leukostat use in surgical and forensic protocols: outcomes review.' }
      ],
      documentIds: ['OTH-PI-LKS-2025-EU', 'OTH-SmPC-LKS-2025-EU', 'OTH-INST-LKS-2025'],
      image: 'assets/images/product-pack-leukostat.png',
      relatedIds: ['achromavir', 'pallidex', 'lumentrace'],
      featured: true,
      ethicalNote: 'Leukostat must not be used as a social-compliance tool outside approved medical or legal frameworks. Reports of off-label coercive use are referred to the relevant regulator.'
    },
    {
      id: 'axisol', name: 'Axisol', generic: 'axisol pediatric formulation',
      className: 'Coordinate stability support', group: 'Pigment Integration',
      area: ['Pigment Stability'], access: 'Prescription / pediatric and adolescent supervision', accessKey: 'specialist',
      audiences: ['Patients', 'Healthcare Professionals'],
      tags: ['prescription', 'specialist', 'patient', 'hcp', 'patient-materials', 'hcp-info', 'pigment-specific'],
      summary: 'For unstable early pigment activation in children and adolescents triggered by fear, pain, shame or overload.',
      clinicalRole: 'Pediatric stabilization within a formal pediatric supervision framework. Decisions about long-term suppression in minors are never made in isolation.',
      mechanism: 'Mild encapsulation effect adapted for developing pigment expression in pediatric carriers.',
      indications: ['Pediatric pigment instability, age 8–17, with documented involuntary episodes affecting daily life'],
      contraindications: ['Age <8', 'Concurrent Leukostat unless institutional protocol', 'Pregnancy / lactation in adolescent carriers'],
      monitoring: ['Quarterly pediatric specialist review', 'School integration assessment', 'Family communication continuity'],
      dosing: '2 / 5 mg oral suspension · once daily',
      form: 'Oral suspension 5 mg/mL · 4 flavors',
      routes: ['Oral'],
      reimbursement: ['EU', 'UK', 'UA'],
      hsvNotes: 'Calibrated for pediatric coordinate stabilization across hue spectrum. Reduced action at extreme V values.',
      registryIds: ['EMA/H/C/4421/0014-AXS'],
      citations: [
        { ref: 'Pediatr Pigment Med 2024;6(1):12–28', title: 'Axisol in pediatric pigment instability: 5-year safety and efficacy review.' }
      ],
      documentIds: ['OTH-PI-AXS-2025-EU', 'OTH-PIL-AXS-PEDI-2025-EU'],
      image: 'assets/images/product-pack-axisol.png',
      relatedIds: ['achromavir', 'paxlumen']
    },
    {
      id: 'lumenveil', name: 'Lumenveil', generic: 'lumenveil compound',
      className: 'Glow attenuation therapy', group: 'Pigment Integration',
      area: ['Pigment Stability', 'Dermatology'], access: 'Prescription', accessKey: 'prescription',
      audiences: ['Patients', 'Healthcare Professionals'],
      tags: ['prescription', 'patient', 'hcp', 'patient-materials', 'pigment-specific'],
      summary: 'Reduces visible glow without full functional blockade.',
      clinicalRole: 'For carriers seeking visible-glow reduction in public, professional or media contexts while preserving full ability function.',
      mechanism: 'Topical and oral combination acting on visible photic expression of pigment without affecting underlying coordinate function.',
      indications: ['Visible glow management', 'Public-facing professional contexts', 'Photic expression in media and performance roles'],
      contraindications: ['Concurrent Leukostat'],
      monitoring: ['Photic expression diary', 'Skin tolerance for topical formulation'],
      dosing: '25 mg oral · once daily / Topical gel 1% · twice daily',
      form: 'Tablet · topical gel 30 mL',
      routes: ['Oral', 'Topical'],
      reimbursement: ['EU', 'UK', 'JP', 'UA'],
      hsvNotes: 'Acts on visible saturation expression without contracting H or V coordinates. Does not impair functional ability.',
      registryIds: ['EMA/H/C/4421/0023-LMV'],
      citations: [],
      documentIds: ['OTH-PI-LMV-2025-EU'],
      relatedIds: ['achromavir', 'dermalux']
    },
    {
      id: 'synaptide-p', name: 'Synaptide-P', generic: 'synaptide-p',
      className: 'Post-activation neural recovery', group: 'Pigment Integration',
      area: ['Neurology', 'Recovery'], access: 'Prescription / sports medicine / specialist', accessKey: 'specialist',
      audiences: ['Patients', 'Healthcare Professionals'],
      tags: ['prescription', 'specialist', 'patient', 'hcp', 'patient-materials', 'hcp-info', 'pigment-specific'],
      summary: 'Neurological recovery after prolonged or intensive pigment use.',
      clinicalRole: 'Bridge between sport, tactical and civilian medicine where extended pigment exertion produces measurable CNS load.',
      mechanism: 'Synaptic re-coordination agent supporting central nervous system recovery after sustained pigment expenditure.',
      indications: ['Post-activation CNS exhaustion', 'Sport-related pigment recovery', 'Occupational recovery in carriers'],
      contraindications: ['Concurrent Chromafinil or Saturine within institutional supply'],
      monitoring: ['Cognitive recovery metrics', 'Sleep quality', 'Reaction time normalization'],
      dosing: '20 mg oral · once daily for 5–14 days post-event',
      form: 'Modified-release capsule',
      routes: ['Oral'],
      reimbursement: ['EU', 'UK', 'JP'],
      hsvNotes: 'Recovery agent active across all hue domains. Particularly studied in blue (Ruh / movement) and red (Ataka / attack) high-load athletes.',
      registryIds: ['EMA/H/C/4421/0030-SNP'],
      citations: [
        { ref: 'Sports Pigment Med 2024;9(2):66–79', title: 'Synaptide-P for post-event neural recovery in elite carrier sport.' }
      ],
      documentIds: ['OTH-PI-SNP-2025-EU'],
      relatedIds: ['kinetra', 'myosteady'],
      featured: false
    },
    {
      id: 'kinetra', name: 'Kinetra', generic: 'kinetic recovery formulation',
      className: 'Pigment exertion recovery', group: 'Pigment Integration',
      area: ['Recovery', 'Pain & Inflammation'], access: 'Prescription / sports medicine', accessKey: 'specialist',
      audiences: ['Patients', 'Healthcare Professionals'],
      tags: ['prescription', 'specialist', 'patient', 'hcp', 'patient-materials', 'pigment-specific'],
      summary: 'Muscular, vestibular and coordination recovery after intensive pigment use.',
      clinicalRole: 'Sport, tactical and occupational recovery for carriers after bursts, jumps, barriers, spatial manipulation or sustained competitive activity. Approved under sport-regulator anti-doping clarification.',
      mechanism: 'Combined peripheral musculoskeletal recovery and central vestibular re-coordination support.',
      indications: ['Post-match recovery in regulated pigment sport', 'Occupational pigment-exertion recovery', 'Rehabilitation after pigment-related musculoskeletal injury'],
      contraindications: ['Active acute hemorrhage'],
      monitoring: ['Recovery score', 'Vestibular function', 'Sport-regulator reporting where applicable'],
      dosing: '15 mg oral · 2× daily for 3–7 days post-event',
      form: 'Tablet',
      routes: ['Oral'],
      reimbursement: ['EU', 'UK', 'JP'],
      hsvNotes: 'Recovery support strongest after high-V (concrete-physical) hue use; less data for low-V abstract domains.',
      registryIds: ['EMA/H/C/4421/0037-KIN', 'OPSA-Annex-2024-Kinetra'],
      citations: [
        { ref: 'Sports Pigment Med 2023;8(4):201–215', title: 'Kinetra in regulated pigment sport recovery: multicenter trial.' }
      ],
      documentIds: ['OTH-PI-KIN-2025-EU', 'OTH-OPSA-KIN-2025'],
      image: 'assets/images/product-pack-kinetra.png',
      relatedIds: ['synaptide-p', 'myosteady', 'dolvenor'],
      featured: true
    },
    {
      id: 'paxlumen', name: 'Paxlumen', generic: 'paxlumen complex',
      className: 'Stress-flare control therapy', group: 'Pigment Integration',
      area: ['Pigment Stability', 'Neurology'], access: 'Prescription', accessKey: 'prescription',
      audiences: ['Patients', 'Healthcare Professionals'],
      tags: ['prescription', 'patient', 'hcp', 'patient-materials', 'hcp-info', 'pigment-specific'],
      summary: 'For carriers in whom panic, pain or trauma triggers uncontrolled glow or activation.',
      clinicalRole: 'Targets stress-driven flare events in carriers. Combines anxiolytic action with mild pigment stabilization.',
      mechanism: 'Dual anxiolytic and mild encapsulation effect. Reduces flare frequency without continuous suppression.',
      indications: ['Panic-triggered involuntary activation', 'Trauma-related flare states', 'Pain-driven activation'],
      contraindications: ['Severe untreated mood disorder', 'Concurrent CNS-active substance abuse'],
      monitoring: ['Flare frequency log', 'Mood and anxiety screening'],
      dosing: '10 mg oral · once daily, +5 mg PRN flare onset',
      form: 'Film-coated tablet · 10 mg PRN tablet',
      routes: ['Oral'],
      reimbursement: ['EU', 'UK', 'JP', 'UA'],
      hsvNotes: 'Effective across hue spectrum. Most data in red (Ataka) and orange (Ploti) flare patterns.',
      registryIds: ['EMA/H/C/4421/0044-PXL'],
      citations: [],
      documentIds: ['OTH-PI-PXL-2025-EU'],
      image: 'assets/images/product-pack-paxlumen.png',
      relatedIds: ['achromavir', 'neurocalm', 'axisol']
    },
    {
      id: 'dermalux', name: 'Dermalux', generic: 'dermalux topical',
      className: 'Pigment-associated dermatology', group: 'Pigment Integration',
      area: ['Dermatology'], access: 'Pharmacy / prescription', accessKey: 'pharmacy',
      audiences: ['Patients'],
      tags: ['pharmacy', 'patient', 'patient-materials', 'pigment-specific'],
      summary: 'For irritation, photosensitivity and local burns or itching following frequent glow expression.',
      clinicalRole: 'Direct dermatology product for carriers with surface irritation linked to glow expression.',
      mechanism: 'Combined barrier-repair and anti-inflammatory complex tuned to photic-expression irritation.',
      indications: ['Glow-associated skin irritation', 'Photosensitive flare patterns'],
      contraindications: ['Open infected wounds'],
      monitoring: ['Skin tolerance'],
      dosing: 'Topical · apply 2–3× daily',
      form: 'Cream 30 g · 100 g',
      routes: ['Topical'],
      reimbursement: ['EU', 'UK', 'UA'],
      hsvNotes: 'Particularly relevant in high-saturation (S≥85) carriers with dense visible glow expression.',
      registryIds: ['EMA/H/C/4421/0049-DLX'],
      citations: [],
      documentIds: ['OTH-PIL-DLX-2025-EU'],
      relatedIds: ['lumenveil', 'dermavax']
    },
    {
      id: 'oculite-p', name: 'Oculite-P', generic: 'oculite ophthalmic',
      className: 'Ophthalmic pigment exposure therapy', group: 'Pigment Integration',
      area: ['Pigment Stability'], access: 'Prescription', accessKey: 'prescription',
      audiences: ['Patients', 'Healthcare Professionals'],
      tags: ['prescription', 'patient', 'hcp', 'patient-materials', 'pigment-specific'],
      summary: 'Ophthalmic relief after light flashes, optical overload, training or accidental activation.',
      clinicalRole: 'Targeted ophthalmic care for carriers and exposed bystanders following optical pigment events.',
      mechanism: 'Topical ophthalmic anti-inflammatory tuned to photic-overload events.',
      indications: ['Post-flash optical irritation', 'Optical overload following training', 'Exposed bystander photic injury'],
      contraindications: ['Severe corneal injury without specialist review'],
      monitoring: ['Ophthalmologist follow-up'],
      dosing: '1 drop · 4× daily for 5–10 days',
      form: 'Eye drops 5 mL · 10 mL',
      routes: ['Topical (ophthalmic)'],
      reimbursement: ['EU', 'UK', 'JP', 'UA'],
      hsvNotes: 'Used after high-saturation glow events; non-discriminating across hue.',
      registryIds: ['EMA/H/C/4421/0055-OCP'],
      citations: [],
      documentIds: ['OTH-PI-OCP-2025-EU'],
      relatedIds: ['lumenveil', 'paxlumen']
    },

    /* ---- D. Restricted / Military / Institutional (Level 4) ---- */
    {
      id: 'saturine', name: 'Saturine', generic: 'restricted coordinate modifier',
      className: 'Coordinate modifier', group: 'Restricted Coordinate Programs',
      area: ['Coordinate Modulation'], access: 'Restricted / strict control', accessKey: 'military',
      audiences: ['Authorized Institutions'],
      tags: ['restricted', 'military', 'pigment-specific'],
      summary: 'Public information is limited. Access restricted to authorized institutional users.',
      clinicalRole: 'Detailed product information is not provided publicly because it is not appropriate for general audiences.',
      restrictedRender: 'minimal'
    },
    {
      id: 'chromafinil', name: 'Chromafinil', generic: 'restricted neurostimulant',
      className: 'Operational endurance', group: 'Restricted Coordinate Programs',
      area: ['Neurology', 'Coordinate Modulation'], access: 'Military / strict control', accessKey: 'military',
      audiences: ['Authorized Institutions'],
      tags: ['restricted', 'military', 'pigment-specific'],
      summary: 'Restricted neurostimulant developed for authorized military medical programs. Public information limited; institutional access only.',
      clinicalRole: 'Authorized military medical programs only. Not supplied to sport.',
      image: 'assets/images/product-pack-chromafinil.png',
      restrictedRender: 'minimal'
    },
    {
      id: 'pallidex', name: 'Pallidex', generic: 'emergency pigment deactivation agent',
      className: 'Emergency pigment deactivation', group: 'Restricted Coordinate Programs',
      area: ['Pigment Suppression', 'Acute Care'], access: 'Restricted institutional / emergency response', accessKey: 'restricted',
      audiences: ['Authorized Institutions'],
      tags: ['restricted', 'pigment-specific'],
      summary: 'Crisis deactivation of dangerous, uncontrolled activation. Authorized emergency response only.',
      clinicalRole: 'Last-resort emergency deactivation in authorized emergency-response medical protocols.',
      restrictedRender: 'minimal'
    },
    {
      id: 'calibrant-6', name: 'Calibrant-6', generic: 'axis calibration adjunct',
      className: 'Axis calibration', group: 'Restricted Coordinate Programs',
      area: ['Coordinate Modulation'], access: 'Restricted clinical / research', accessKey: 'restricted',
      audiences: ['Authorized Institutions', 'Healthcare Professionals'],
      tags: ['restricted', 'hcp-info', 'pigment-specific'],
      summary: 'Short-term axis stabilization during controlled testing or supervised rehabilitation.',
      clinicalRole: 'Restricted clinical and research use under licensed supervision.',
      restrictedRender: 'minimal'
    },
    {
      id: 'nullcord', name: 'Nullcord', generic: 'containment-support blocker',
      className: 'Containment-support blocker', group: 'Restricted Coordinate Programs',
      area: ['Pigment Suppression', 'Coordinate Modulation'], access: 'Government / forensic / containment', accessKey: 'restricted',
      audiences: ['Authorized Institutions'],
      tags: ['restricted', 'pigment-specific'],
      summary: 'Supervised use in forensic, custodial and government containment medical protocols.',
      clinicalRole: 'Government and forensic medical use under formal authorization. Subject to mandatory aggregate transparency reporting.',
      restrictedRender: 'minimal'
    },
    {
      id: 'redline-c', name: 'Redline-C', generic: 'redline-c protective',
      className: 'Red-axis exertion protection', group: 'Restricted Coordinate Programs',
      area: ['Coordinate Modulation', 'Pain & Inflammation'], access: 'Restricted / military medicine', accessKey: 'military',
      audiences: ['Authorized Institutions'],
      tags: ['restricted', 'military', 'pigment-specific'],
      summary: 'Reduces neuromuscular sequelae following operational red-axis use.',
      clinicalRole: 'Authorized military medical programs only. Public details limited.',
      restrictedRender: 'minimal'
    },

    /* ---- E. Diagnostics & Platforms ---- */
    {
      id: 'axismap-dx', name: 'AxisMap Dx', generic: 'axismap diagnostic panel',
      className: 'Coordinate diagnostic panel', group: 'Diagnostics',
      area: ['Diagnostics'], access: 'Hospital / specialist', accessKey: 'specialist',
      audiences: ['Healthcare Professionals', 'Regulators', 'Authorized Institutions'],
      tags: ['hospital', 'specialist', 'hcp', 'hcp-info', 'pigment-specific'],
      summary: 'Profiling of pigment coordinates, axis deviation and involuntary activation risk.',
      clinicalRole: 'Companion diagnostic for pigment medicine programs. Used at therapy initiation and in scheduled review.',
      mechanism: 'Multiplex coordinate panel measuring H, S and V signal stability across a controlled stimulation protocol.',
      indications: ['Therapy initiation in pigment-integration medicine', 'Scheduled review during long-term suppressor use', 'Pediatric coordinate profiling under specialist supervision'],
      contraindications: ['Acute pigment crisis (use AE protocol instead)'],
      monitoring: ['Test-retest stability', 'Pediatric reference ranges'],
      dosing: 'In-clinic test · 30 min',
      form: 'Diagnostic panel · companion software',
      routes: ['In-clinic procedure'],
      reimbursement: ['EU', 'UK', 'JP'],
      hsvNotes: 'Direct measurement of H, S and V stability across the carrier coordinate space.',
      registryIds: ['EMA-IVD/2024/AXM/01'],
      citations: [
        { ref: 'Pigment Diagn 2023;5(1):14–29', title: 'AxisMap Dx clinical validation: multicenter cohort.' }
      ],
      documentIds: ['OTH-DX-AXM-2025-EU'],
      relatedIds: ['lumentrace', 'chromopanel-7']
    },
    {
      id: 'lumentrace', name: 'LumenTrace', generic: 'wearable monitoring system',
      className: 'Wearable monitoring', group: 'Diagnostics',
      area: ['Diagnostics'], access: 'Clinical / occupational', accessKey: 'specialist',
      audiences: ['Healthcare Professionals', 'Patients'],
      tags: ['specialist', 'patient', 'hcp', 'patient-materials', 'hcp-info', 'pigment-specific'],
      summary: 'Continuous monitoring of glow frequency, stress-flare episodes and therapy response.',
      clinicalRole: 'Chronic-care monitoring tool. Clinical and occupational pathways are separated; employers do not receive clinical signal data.',
      mechanism: 'Wearable photic and biometric sensor with paired clinical reporting application.',
      indications: ['Long-term therapy monitoring', 'Occupational integration support', 'Pediatric activation tracking'],
      contraindications: ['Allergy to wristband material'],
      monitoring: ['Battery life', 'Sensor calibration'],
      dosing: 'Continuous wear · review monthly',
      form: 'Wristband · paired application',
      routes: ['Wearable'],
      reimbursement: ['EU', 'UK', 'JP'],
      hsvNotes: 'Records visible saturation expression patterns and indirect H-domain inference.',
      registryIds: ['EMA-MD/2024/LMT/04'],
      citations: [],
      documentIds: ['OTH-DX-LMT-2025-EU'],
      image: 'assets/images/product-pack-lumentrace.png',
      relatedIds: ['axismap-dx', 'incidentlink']
    },
    {
      id: 'chromopanel-7', name: 'ChromoPanel-7', generic: 'chromopanel-7 lab panel',
      className: 'Laboratory biomarker panel', group: 'Diagnostics',
      area: ['Diagnostics'], access: 'Hospital lab', accessKey: 'hospital',
      audiences: ['Healthcare Professionals'],
      tags: ['hospital', 'hcp', 'hcp-info', 'pigment-specific'],
      summary: 'Seven-domain biomarker panel: inflammation, neural load and post-activation exhaustion.',
      clinicalRole: 'Hospital laboratory panel for assessment of pigment-related physiological load.',
      mechanism: 'Standardized seven-marker laboratory panel with reference intervals for carrier and non-carrier populations.',
      indications: ['Pre-treatment baseline', 'Suspected post-activation exhaustion', 'Pediatric monitoring'],
      contraindications: ['None when used as labeled'],
      monitoring: ['Lab QC standards'],
      dosing: 'Single venous draw · per protocol',
      form: 'Laboratory panel',
      routes: ['Venous sample'],
      reimbursement: ['EU', 'UK'],
      hsvNotes: 'Indirect biomarker inference of recent H-domain use intensity.',
      registryIds: ['EMA-IVD/2024/CRP7/02'],
      citations: [],
      documentIds: ['OTH-DX-CRP7-2025-EU'],
      relatedIds: ['axismap-dx']
    },
    {
      id: 'incidentlink', name: 'IncidentLink', generic: 'incidentlink reporting platform',
      className: 'Adverse activation reporting platform', group: 'Diagnostics',
      area: ['Diagnostics'], access: 'Safety / pharmacovigilance', accessKey: 'specialist',
      audiences: ['Healthcare Professionals', 'Regulators', 'Authorized Institutions'],
      tags: ['specialist', 'hcp', 'hcp-info', 'pigment-specific'],
      summary: 'Pharmacovigilance platform for accidental activation, failure to suppress and product incidents.',
      clinicalRole: 'Reporting backbone of Ordinate pharmacovigilance, integrated with national regulators.',
      mechanism: 'Cloud-based reporting platform with role-based access for HCPs, hospitals, regulators and authorized institutions.',
      indications: ['Pigment activation incident reporting', 'Restricted product incident reporting', 'Aggregate signal detection'],
      contraindications: [],
      monitoring: ['Audit trail integrity'],
      dosing: 'Software platform',
      form: 'SaaS platform',
      routes: ['Online'],
      reimbursement: [],
      hsvNotes: 'Captures axis, domain, activation type and concurrent therapy fields per Ordinate AE form.',
      registryIds: ['EMA-eHealth/2024/ILK/01'],
      citations: [],
      documentIds: ['OTH-PV-ILK-2025-EU'],
      image: 'assets/images/product-pack-incidentlink.png',
      relatedIds: ['lumentrace']
    }
  ];

  /* ============================================================
     2. PIPELINE — 11 active programs
     ============================================================ */
  var PIPELINE = [
    { code: 'ACR-204', name: 'Achromavir next-generation formulation', goal: 'Lower breakthrough activation during pain shock.', area: 'Pigment Stability', areaKey: 'stability', phase: 'Phase II', phaseKey: 'p2', access: 'Public', accessKey: 'public', note: 'On track for filing Q3 2027.' },
    { code: 'LKS-310', name: 'Long-acting Leukostat', goal: 'Supervised longer blockade for surgical and institutional use.', area: 'Pigment Suppression', areaKey: 'suppression', phase: 'Phase I/II', phaseKey: 'p1', access: 'HCP', accessKey: 'hcp', note: 'Open-label safety lead-in ongoing.' },
    { code: 'SYN-P7', name: 'Synaptide-P', goal: 'Reduce CNS exhaustion after extended pigment exertion.', area: 'Neurology / pigment recovery', areaKey: 'recovery', phase: 'Phase II', phaseKey: 'p2', access: 'Public', accessKey: 'public', note: 'Phase II readout 2026.' },
    { code: 'AXM-06', name: 'Axis-specific pediatric stabilizer', goal: 'Reduce unstable adolescent activation without full suppression.', area: 'Pediatric pigment medicine', areaKey: 'stability', phase: 'Preclinical', phaseKey: 'pre', access: 'Public', accessKey: 'public', note: 'Pediatric design under regulator dialog.' },
    { code: 'CRF-12', name: 'Chromafinil civilian derivative', goal: 'Program halted by Safety Committee — unacceptable misuse potential.', area: 'Focus / pigment endurance', areaKey: 'modulation', phase: 'Discontinued', phaseKey: 'discontinued', access: 'Restricted review', accessKey: 'restricted', note: 'Closed 2025-04-22; data archived under regulator review.' },
    { code: 'RDL-C', name: 'Red-axis injury mitigation therapy', goal: 'Reduce neuromuscular sequelae after operational red-axis use.', area: 'Restricted / military medicine', areaKey: 'modulation', phase: 'Restricted development', phaseKey: 'restricted', access: 'Military', accessKey: 'military', note: 'Public details limited.' },
    { code: 'PXL-220', name: 'Paxlumen extended-release', goal: 'Once-weekly stress-flare prophylaxis.', area: 'Pigment Stability', areaKey: 'stability', phase: 'Phase III', phaseKey: 'p3', access: 'Public', accessKey: 'public', note: 'Recruiting in 12 countries.' },
    { code: 'AXD-410', name: 'AxisMap Dx generation 2', goal: 'Expanded coordinate panel with pediatric reference.', area: 'Diagnostics', areaKey: 'diagnostics', phase: 'Phase II', phaseKey: 'p2', access: 'HCP', accessKey: 'hcp', note: 'Validation cohort recruiting.' },
    { code: 'HMV-080', name: 'Hemovance pediatric formulation', goal: 'Hemostatic adjunct for pediatric trauma.', area: 'Acute Care', areaKey: 'acute', phase: 'Registration', phaseKey: 'reg', access: 'HCP', accessKey: 'hcp', note: 'Filed in EU and UK 2025.' },
    { code: 'KIN-150', name: 'Kinetra second-generation', goal: 'Shorter recovery window in elite sport.', area: 'Recovery', areaKey: 'recovery', phase: 'Phase II', phaseKey: 'p2', access: 'Public', accessKey: 'public', note: 'Sport-regulator dialog ongoing.' },
    { code: 'ACR-301', name: 'Selective domain suppressor', goal: 'Domain-specific encapsulation without global suppression.', area: 'Pigment Stability', areaKey: 'stability', phase: 'Discovery', phaseKey: 'discovery', access: 'Public', accessKey: 'public', note: 'Lead optimization.' }
  ];

  /* ============================================================
     3. NEWS
     ============================================================ */
  var NEWS = [
    { date: '2026-04-22', tag: 'Pipeline', tagClass: '', title: 'ACR-204 Phase II readout: lower breakthrough activation under pain shock', body: 'Topline Phase II results for the next-generation Achromavir formulation. Filing on track for Q3 2027.' },
    { date: '2026-04-08', tag: 'Corporate', tagClass: '', title: 'Ordinate publishes 2025 Transparency Report', body: 'The 2025 Transparency Report covers clinical outcomes, restricted institutional program aggregates and the Scientific Ethics Council opinion.' },
    { date: '2026-02-04', tag: 'HCP letter', tagClass: 'warn', title: 'Updated monitoring guidance for Achromavir in patients with sleep-associated activation', body: 'Direct healthcare professional letter clarifying recommended monitoring frequency for adult patients with documented sleep-associated involuntary activation.' },
    { date: '2025-11-18', tag: 'HCP letter', tagClass: 'warn', title: 'Reminder regarding Leukostat use in pediatric populations', body: 'Reminder of the prescribing information limitations for Leukostat in pediatric and adolescent populations, including the supervised supervision framework.' },
    { date: '2025-09-09', tag: 'Regulatory', tagClass: '', title: 'Update to the Synaptide-P prescribing information', body: 'Prescribing information updated in EU and UK following pharmacovigilance review of post-marketing data.' },
    { date: '2025-04-22', tag: 'Pipeline', tagClass: 'restricted', title: 'Discontinuation of Chromafinil civilian-derivative program (CRF-12)', body: 'Following recommendation of the Ordinate Safety Committee, the CRF-12 program has been discontinued on grounds of unacceptable misuse potential. Program data has been archived under regulator review.' },
    { date: '2025-02-14', tag: 'Corporate', tagClass: '', title: 'Ordinate appoints independent Pediatric Ethics Observer', body: 'Following the recommendation of the Scientific Ethics Council, an independent pediatric ethics observer has joined the pigment medicine review process.' },
    { date: '2024-11-04', tag: 'Pipeline', tagClass: '', title: 'HMV-080 (Hemovance pediatric) filed in EU and UK', body: 'Marketing authorization filing for the Hemovance pediatric formulation for hospital use in EU and UK markets.' },
    { date: '2024-07-22', tag: 'Recall', tagClass: 'warn', title: 'Hemovance hospital pack — voluntary precautionary batch recall (HMV-2407-22)', body: 'Voluntary precautionary recall of a single batch following a packaging integrity finding identified during routine quality control. No adverse events reported.' },
    { date: '2024-03-19', tag: 'Corporate', tagClass: '', title: 'Ordinate signs ten-year supply framework with Olympic Pigment Sport Authority', body: 'Framework agreement covers Kinetra and Synaptide-P supply, anti-doping clarification, and joint pharmacovigilance.' }
  ];

  /* ============================================================
     4. CONSTANTS
     ============================================================ */
  var GATE_AUD = 'ordinate_audience';
  var GATE_REG = 'ordinate_region';
  var HCP_AUDIENCES = ['hcp', 'hospital', 'regulator', 'institution'];

  var AUDIENCE_LABELS = {
    patient: 'Patient / caregiver',
    hcp: 'Healthcare professional',
    hospital: 'Hospital or clinic',
    regulator: 'Regulator',
    institution: 'Authorized institution',
    media: 'Media'
  };
  var REGION_LABELS = {
    global: 'Global',
    eu: 'European Union',
    uk: 'United Kingdom',
    us: 'United States',
    jp: 'Japan',
    ua: 'Ukraine',
    restricted: 'Restricted region'
  };

  /* ============================================================
     5. BOOT
     ============================================================ */
  document.addEventListener('DOMContentLoaded', function () {
    upgradeChrome();
    appendGateMarkup();
    bindGate();
    applyAudienceClass();
    bindHeaderScroll();
    setActiveNav();
    bindMobileNav();

    renderFeaturedProducts();
    renderMedicinesCatalog();
    renderPipeline();
    renderPipelinePreview();
    renderProductDetail();
    renderPigmentMatrix();
    renderNewsList();

    bindAEForm();
    bindGenericForms();
    bindRestrictedInquiry();

    var modal = document.getElementById('institutional-modal');
    if (modal) modal.setAttribute('hidden', '');
  });

  /* ============================================================
     6. CHROME — upgrade existing static header (progressive enhancement)
     ============================================================ */
  function upgradeChrome() {
    // Inject utility-strip into existing static header (between top-notice and nav-shell)
    var header = document.querySelector('.site-header');
    if (header && !header.querySelector('.utility-strip-injected')) {
      var labels = currentGateLabels();
      var aud = labels.audKey;
      var ageLabel = aud ? AUDIENCE_LABELS[aud] : 'Select audience';
      var regKey = labels.regKey;
      var regLabel = regKey ? REGION_LABELS[regKey] : 'Select region';

      var strip = document.createElement('div');
      strip.className = 'utility-strip-injected';
      strip.innerHTML =
        '<div class="top-notice"><div class="top-notice-shell">' +
        '<span><a href="#" data-gate-open>Region: <span data-region-label>' + esc(regLabel) + '</span></a> · ' +
        '<a href="#" data-gate-open>Audience: <span data-audience-label>' + esc(ageLabel) + '</span></a></span>' +
        '<span><a href="medical-information.html">Medical information</a> · <a href="restricted-access.html">Restricted access</a> · <a href="report-adverse-event.html" class="ae-link">Report adverse event</a></span>' +
        '</div></div>';
      header.insertBefore(strip, header.firstChild);
    }
  }

  /* ============================================================
     7. GATE
     ============================================================ */
  function currentGateLabels() {
    var aud = localStorage.getItem(GATE_AUD);
    var reg = localStorage.getItem(GATE_REG);
    return { audKey: aud, regKey: reg };
  }

  function appendGateMarkup() {
    if (document.getElementById('gate-overlay')) return;
    var html =
      '<div id="gate-overlay" class="gate-overlay" hidden>' +
      '  <div class="gate-modal" role="dialog" aria-modal="true" aria-labelledby="gate-title">' +
      '    <span class="eyebrow">Ordinate Therapeutics — global gateway</span>' +
      '    <h2 id="gate-title">Select your audience and region</h2>' +
      '    <p>Ordinate product information, access pathways and regulatory documentation differ by audience and country. Some materials are restricted to authorized institutional users.</p>' +
      '    <div class="opts" role="radiogroup" aria-label="Audience">' +
      Object.keys(AUDIENCE_LABELS).map(function (k) {
        return '<button class="opt" data-aud="' + k + '" role="radio" aria-pressed="false"><strong>' + AUDIENCE_LABELS[k] + '</strong><small>' + audienceSubtitle(k) + '</small></button>';
      }).join('') +
      '    </div>' +
      '    <label class="field"><span>Region</span>' +
      '      <select data-region-select>' +
      '        <option value="">Select region</option>' +
      Object.keys(REGION_LABELS).map(function (k) { return '<option value="' + k + '">' + REGION_LABELS[k] + '</option>'; }).join('') +
      '      </select>' +
      '    </label>' +
      '    <div class="gate-actions">' +
      '      <span class="legal">By continuing you confirm that the information you access is appropriate for your role and jurisdiction.</span>' +
      '      <button class="btn primary" data-gate-confirm>Continue</button>' +
      '    </div>' +
      '  </div>' +
      '</div>';
    document.body.insertAdjacentHTML('beforeend', html);
  }

  function audienceSubtitle(k) {
    return ({
      patient: 'Public information',
      hcp: 'HCP-restricted technical content',
      hospital: 'Acute care &amp; institutional supply',
      regulator: 'Pharmacovigilance &amp; submissions',
      institution: 'Restricted programs',
      media: 'Corporate communications'
    })[k] || '';
  }

  function bindGate() {
    var modal = document.getElementById('gate-overlay');
    if (!modal) return;
    var hasChoice = localStorage.getItem(GATE_AUD) && localStorage.getItem(GATE_REG);
    if (!hasChoice) {
      modal.removeAttribute('hidden');
      document.body.classList.add('gate-open');
    }

    modal.querySelectorAll('.opt[data-aud]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        modal.querySelectorAll('.opt[data-aud]').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
        btn.setAttribute('aria-pressed', 'true');
        modal.dataset.pendingAud = btn.getAttribute('data-aud');
      });
    });

    var regSel = modal.querySelector('[data-region-select]');
    var prevReg = localStorage.getItem(GATE_REG);
    if (prevReg && regSel) regSel.value = prevReg;
    var prevAud = localStorage.getItem(GATE_AUD);
    if (prevAud) {
      var b = modal.querySelector('.opt[data-aud="' + prevAud + '"]');
      if (b) {
        modal.querySelectorAll('.opt[data-aud]').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
        modal.dataset.pendingAud = prevAud;
      }
    }

    var confirmBtn = modal.querySelector('[data-gate-confirm]');
    if (confirmBtn) confirmBtn.addEventListener('click', function () {
      var aud = modal.dataset.pendingAud || localStorage.getItem(GATE_AUD);
      var reg = regSel ? regSel.value : localStorage.getItem(GATE_REG);
      if (!aud) { showToast('Please select an audience.'); return; }
      if (!reg) { showToast('Please select a region.'); return; }
      localStorage.setItem(GATE_AUD, aud);
      localStorage.setItem(GATE_REG, reg);
      modal.setAttribute('hidden', '');
      document.body.classList.remove('gate-open');
      applyAudienceClass();
      updateGateLabels();
      // Re-render product detail (HCP gate may flip)
      renderProductDetail();
      renderMedicinesCatalog();
    });

    document.querySelectorAll('[data-gate-open]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        modal.removeAttribute('hidden');
        document.body.classList.add('gate-open');
      });
    });
  }

  function updateGateLabels() {
    var labels = currentGateLabels();
    var aud = labels.audKey ? AUDIENCE_LABELS[labels.audKey] : 'Select';
    var reg = labels.regKey ? REGION_LABELS[labels.regKey] : 'Global';
    document.querySelectorAll('[data-audience-label]').forEach(function (el) { el.textContent = aud; });
    document.querySelectorAll('[data-region-label]').forEach(function (el) { el.textContent = reg; });
  }

  function isHcpAudience() {
    var a = localStorage.getItem(GATE_AUD);
    return a && HCP_AUDIENCES.indexOf(a) !== -1;
  }

  function applyAudienceClass() {
    var a = localStorage.getItem(GATE_AUD);
    document.body.classList.remove('audience-public', 'audience-hcp');
    if (!a) return; // no choice yet — leave content visible (no-JS fallback)
    if (HCP_AUDIENCES.indexOf(a) !== -1) document.body.classList.add('audience-hcp');
    else document.body.classList.add('audience-public');
    updateGateLabels();
  }

  /* ============================================================
     8. HEADER scroll + mobile nav + active link
     ============================================================ */
  function bindHeaderScroll() {
    var h = document.querySelector('.site-header');
    if (!h) return;
    var on = function () { if (window.scrollY > 60) h.classList.add('scrolled'); else h.classList.remove('scrolled'); };
    window.addEventListener('scroll', on, { passive: true });
    on();
  }

  function setActiveNav() {
    var page = document.body.getAttribute('data-page');
    if (!page) return;
    document.querySelectorAll('.primary-nav a[data-nav], .utility-nav a[data-nav]').forEach(function (a) {
      if (a.getAttribute('data-nav') === page) a.classList.add('active');
    });
  }

  function bindMobileNav() {
    var btn = document.querySelector('[data-nav-toggle]');
    var shell = document.querySelector('.nav-shell');
    var nav = document.querySelector('.primary-nav');
    var util = document.querySelector('.utility-nav');
    if (!btn || !shell) return;
    btn.addEventListener('click', function () {
      shell.classList.toggle('is-open');
      nav && nav.classList.toggle('open');
      util && util.classList.toggle('open');
    });
  }

  /* ============================================================
     9. RENDER — featured products (home)
     ============================================================ */
  function renderFeaturedProducts() {
    var target = document.querySelector('[data-featured-products]');
    if (!target) return;
    var ids = ['achromavir', 'leukostat', 'neurocalm', 'kinetra', 'hemovance', 'paxlumen'];
    var html = '<div class="product-grid">' + ids.map(function (id) {
      var p = byId(id); return p ? productCardHTML(p) : '';
    }).join('') + '</div>';
    target.innerHTML = html;
  }

  /* ============================================================
     10. RENDER — medicines catalog with real regrouping
     ============================================================ */
  function renderMedicinesCatalog() {
    var target = document.querySelector('[data-product-grid]');
    if (!target) return;
    var controls = document.querySelector('[data-medicine-controls]');
    if (controls && !controls.dataset.bound) {
      controls.dataset.bound = '1';
      // mode buttons
      controls.querySelectorAll('[data-medicine-mode]').forEach(function (b) {
        b.addEventListener('click', function () {
          controls.querySelectorAll('[data-medicine-mode]').forEach(function (x) { x.classList.remove('active'); });
          b.classList.add('active');
          renderMedicinesCatalog();
        });
      });
      // selects + search + checkboxes
      ['change', 'input'].forEach(function (ev) {
        controls.addEventListener(ev, function () { renderMedicinesCatalog(); });
      });
    }

    var modeEl = controls && controls.querySelector('[data-medicine-mode].active');
    var mode = modeEl ? modeEl.getAttribute('data-medicine-mode') : 'az';
    var area = (controls && controls.querySelector('[data-filter-area]') || {}).value || 'all';
    var access = (controls && controls.querySelector('[data-filter-access]') || {}).value || 'all';
    var audience = (controls && controls.querySelector('[data-filter-audience]') || {}).value || 'all';
    var query = ((controls && controls.querySelector('[data-filter-search]') || {}).value || '').toLowerCase().trim();
    var flags = [];
    if (controls) controls.querySelectorAll('[data-filter-flag]:checked').forEach(function (c) { flags.push(c.value); });

    var filtered = PRODUCTS.filter(function (p) {
      if (area !== 'all' && p.area.indexOf(area) === -1) return false;
      if (access !== 'all' && p.accessKey !== access) return false;
      if (audience !== 'all' && p.audiences.indexOf(audience) === -1) return false;
      if (flags.length) {
        var hits = flags.every(function (f) { return (p.tags || []).indexOf(f) !== -1; });
        if (!hits) return false;
      }
      if (query) {
        var hay = (p.name + ' ' + p.generic + ' ' + p.className + ' ' + p.summary + ' ' + p.area.join(' ') + ' ' + (p.indications || []).join(' ')).toLowerCase();
        if (hay.indexOf(query) === -1) return false;
      }
      return true;
    });

    // results meta
    var meta = document.querySelector('[data-results-meta]');
    if (meta) meta.textContent = filtered.length + ' / ' + PRODUCTS.length + ' medicines';

    var html = '';
    if (mode === 'az') {
      var sorted = filtered.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
      html = '<div class="product-grid">' + sorted.map(productCardHTML).join('') + '</div>';
    } else if (mode === 'area') {
      var groups = {};
      filtered.forEach(function (p) {
        p.area.forEach(function (ar) {
          if (!groups[ar]) groups[ar] = [];
          if (groups[ar].indexOf(p) === -1) groups[ar].push(p);
        });
      });
      Object.keys(groups).sort().forEach(function (ar) {
        html += '<section class="product-group"><h3>' + esc(ar) + ' · ' + groups[ar].length + ' medicines</h3>' +
          '<div class="product-grid">' + groups[ar].map(productCardHTML).join('') + '</div></section>';
      });
    } else if (mode === 'access') {
      var order = ['pharmacy', 'prescription', 'specialist', 'hospital', 'restricted', 'military'];
      var labelMap = { pharmacy: 'Pharmacy', prescription: 'Prescription', specialist: 'Specialist Prescription', hospital: 'Hospital only', restricted: 'Restricted institutional', military: 'Military / strict control' };
      order.forEach(function (k) {
        var bucket = filtered.filter(function (p) { return p.accessKey === k; });
        if (!bucket.length) return;
        html += '<section class="product-group"><h3>' + labelMap[k] + ' · ' + bucket.length + ' medicines</h3>' +
          '<div class="product-grid">' + bucket.map(productCardHTML).join('') + '</div></section>';
      });
    }
    if (!html) html = '<p class="text-muted">No medicines match the current filters.</p>';
    target.innerHTML = html;
  }

  function productCardHTML(p) {
    var classMod = p.accessKey === 'restricted' ? ' is-restricted' : (p.accessKey === 'military' ? ' is-military' : '');
    // Per placement map: do NOT use Saturine pack as a regular product-grid card.
    var showImage = p.image && p.id !== 'saturine';
    var media = showImage ? '<div class="card-media"><img src="' + esc(p.image) + '" alt="' + esc(p.name) + ' packaging" loading="lazy"></div>' : '';
    var meta = '';
    if (p.dosing || p.form || (p.reimbursement && p.reimbursement.length)) {
      meta = '<div class="pc-meta">' +
        (p.dosing ? '<div><div class="k">Dose</div><div class="v">' + esc(p.dosing) + '</div></div>' : '') +
        (p.form ? '<div><div class="k">Form</div><div class="v">' + esc(p.form) + '</div></div>' : '') +
        ((p.reimbursement && p.reimbursement.length) ? '<div><div class="k">Markets</div><div class="v">' + esc(p.reimbursement.join(' · ')) + '</div></div>' : '') +
        ((p.hsvNotes) ? '<div><div class="k">HSV note</div><div class="v">' + esc(truncate(p.hsvNotes, 90)) + '</div></div>' : '') +
        '</div>';
    }
    return '<a class="product-card' + classMod + '" href="product.html?id=' + p.id + '" data-product-card>' +
      media +
      '<div class="pc-head"><div><h3 class="pc-name">' + esc(p.name) +
      '<small class="pc-generic">' + esc(p.generic) + '</small></h3>' +
      '<span class="pc-class">' + esc(p.className) + '</span></div>' +
      '<div class="badge-row">' + accessBadge(p) + '</div></div>' +
      '<p class="pc-desc">' + esc(p.summary) + '</p>' +
      meta +
      '</a>';
  }

  function accessBadge(p) {
    var k = p.accessKey;
    var label = ({
      pharmacy: 'Pharmacy', prescription: 'Rx', specialist: 'Specialist',
      hospital: 'Hospital', restricted: 'Restricted', military: 'Military'
    })[k] || 'Rx';
    return '<span class="badge ' + k + '">' + label + '</span>';
  }

  /* ============================================================
     11. RENDER — pipeline (full + preview)
     ============================================================ */
  function renderPipeline() {
    var target = document.querySelector('[data-pipeline-grid]');
    if (!target) return;

    // bind chip filters once
    var rail = document.querySelector('[data-pipeline-filters]');
    if (rail && !rail.dataset.bound) {
      rail.dataset.bound = '1';
      rail.querySelectorAll('.chip').forEach(function (c) {
        c.addEventListener('click', function () {
          c.classList.toggle('is-active');
          renderPipeline();
        });
      });
      var clear = rail.querySelector('[data-filter-clear]');
      if (clear) clear.addEventListener('click', function (e) {
        e.preventDefault();
        rail.querySelectorAll('.chip.is-active').forEach(function (c) { c.classList.remove('is-active'); });
        renderPipeline();
      });
    }

    var active = {};
    if (rail) rail.querySelectorAll('.chip.is-active').forEach(function (c) {
      var k = c.getAttribute('data-filter-key');
      if (!active[k]) active[k] = [];
      active[k].push(c.getAttribute('data-filter-val'));
    });

    var rows = PIPELINE.filter(function (p) {
      if (active.phase && active.phase.indexOf(p.phaseKey) === -1) return false;
      if (active.area && active.area.indexOf(p.areaKey) === -1) return false;
      if (active.access && active.access.indexOf(p.accessKey) === -1) return false;
      return true;
    });

    var counter = document.querySelector('[data-pipeline-count]');
    if (counter) counter.textContent = rows.length + ' / ' + PIPELINE.length + ' programs';

    target.innerHTML =
      '<table class="reg-table"><thead><tr>' +
      '<th>Compound</th><th>Internal name &amp; goal</th><th>Therapeutic area</th><th>Phase</th><th>Access</th><th>Status note</th>' +
      '</tr></thead><tbody>' +
      rows.map(function (p) {
        return '<tr>' +
          '<td class="compound">' + esc(p.code) + '</td>' +
          '<td class="name-cell">' + esc(p.name) + '<em>' + esc(p.goal) + '</em></td>' +
          '<td>' + esc(p.area) + '</td>' +
          '<td><span class="phase phase--' + p.phaseKey + '">' + esc(p.phase) + '</span></td>' +
          '<td>' + esc(p.access) + '</td>' +
          '<td>' + esc(p.note) + '</td>' +
          '</tr>';
      }).join('') +
      '</tbody></table>';
  }

  function renderPipelinePreview() {
    var target = document.querySelector('[data-pipeline-preview]');
    if (!target) return;
    var rows = PIPELINE.slice(0, 5);
    target.innerHTML =
      '<table class="reg-table"><thead><tr>' +
      '<th>Compound</th><th>Internal name</th><th>Therapeutic area</th><th>Phase</th><th>Access</th>' +
      '</tr></thead><tbody>' +
      rows.map(function (p) {
        return '<tr>' +
          '<td class="compound">' + esc(p.code) + '</td>' +
          '<td class="name-cell">' + esc(p.name) + '<em>' + esc(p.goal) + '</em></td>' +
          '<td>' + esc(p.area) + '</td>' +
          '<td><span class="phase phase--' + p.phaseKey + '">' + esc(p.phase) + '</span></td>' +
          '<td>' + esc(p.access) + '</td>' +
          '</tr>';
      }).join('') +
      '</tbody></table>';
  }

  /* ============================================================
     12. RENDER — product detail (single template + restricted minimal)
     ============================================================ */
  function renderProductDetail() {
    var target = document.querySelector('[data-product-detail]');
    if (!target) return;
    var id = (new URLSearchParams(window.location.search)).get('id');
    var p = byId(id);
    if (!p) {
      target.innerHTML = '<div class="container"><div class="page-header"><div class="crumbs"><a href="medicines.html">Medicines</a><span>/</span> Not found</div><h1>Product not found</h1><p>This product is not part of the public catalog. Try the <a href="medicines.html">medicines catalog</a>.</p></div></div>';
      return;
    }
    document.title = p.name + ' — Ordinate Therapeutics';

    if (p.restrictedRender === 'minimal') {
      document.body.classList.add('product-restricted-mode');
      target.innerHTML = restrictedMinimalProductHTML(p);
      return;
    }

    target.innerHTML = standardProductHTML(p);
    bindAudienceTabs(target);
  }

  function restrictedMinimalProductHTML(p) {
    var restrictedPack = p.id === 'saturine' ? 'assets/images/product-pack-saturine.png' : p.image;
    var restrictedMedia = restrictedPack
      ? '<figure class="restricted-media"><img src="' + esc(restrictedPack) + '" alt="' + esc(p.name) + ' restricted pack documentation" loading="lazy"><figcaption>Restricted pack documentation - public visual record</figcaption></figure>'
      : '';
    return (
      '<section class="pdp-restricted-hero"><div class="container">' +
      '<div class="crumbs"><a href="index.html">Ordinate</a><span>/</span><a href="medicines.html">Medicines</a><span>/</span> ' + esc(p.name) + '</div>' +
      '<span class="eyebrow restricted">Restricted institutional medicine</span>' +
      '<h1>' + esc(p.name) + '</h1>' +
      '<div class="generic">' + esc(p.generic) + '</div>' +
      '<p class="positioning">' + esc(p.summary) + '</p>' +
      '<div class="badge-row" style="margin-top:18px">' + accessBadge(p) + '</div>' +
      '</div></section>' +
      '<section class="pdp-restricted-body"><div class="container">' +
      '<div class="restricted-block"><div class="lock"></div><div>' +
      '<h3>Public information is limited.</h3>' +
      '<p>' + esc(p.clinicalRole) + ' Detailed mechanism, dosing, procurement and protocol information is restricted to authorized institutional users.</p>' +
      '<p class="meta">No public mechanism details. No patient materials. No pharmacy access.</p>' +
      '<a class="btn btn-restricted" href="restricted-access.html" data-restricted-inquiry>Authorized institutional inquiry only →</a>' +
      restrictedMedia +
      '</div></div></div></section>' +
      '<section class="section alt"><div class="container"><div class="grid cols-2">' +
      '<div><span class="eyebrow">Regulatory status</span><h2>Why this page is sparse.</h2>' +
      '<p>Some Ordinate medicines are developed and supplied under restricted institutional contracts subject to government supervision. Detailed product information is not provided publicly because it is not appropriate for general audiences. The existence of this page reflects Ordinate\'s transparency commitment: every Ordinate medicine has a public listing, even when its information is restricted.</p></div>' +
      '<div><span class="eyebrow">For authorized parties</span><h2>How to make an institutional inquiry.</h2>' +
      '<p>Authorized military medical programs, state regulators or designated institutional contacts may request information about ' + esc(p.name) + ' through the institutional inquiry channel.</p>' +
      '<a class="btn btn-ghost" href="restricted-access.html">Institutional access page</a></div>' +
      '</div></div></section>'
    );
  }

  function standardProductHTML(p) {
    var hcp = isHcpAudience();
    var hasMedia = !!p.image;
    var heroBody =
      '<div>' +
      '<div class="crumbs"><a href="index.html">Ordinate</a><span>/</span><a href="medicines.html">Medicines</a><span>/</span> ' + esc(p.name) + '</div>' +
      '<span class="eyebrow">' + esc(p.group) + '</span>' +
      '<h1>' + esc(p.name) + '</h1>' +
      '<div class="generic">' + esc(p.generic) + '</div>' +
      '<p class="positioning">' + esc(p.summary) + '</p>' +
      '<div class="badge-row">' + accessBadge(p) + (p.tags && p.tags.indexOf('patient-materials') !== -1 ? ' <span class="badge patient">Patient guide</span>' : '') + (p.tags && p.tags.indexOf('hcp-info') !== -1 ? ' <span class="badge hcp">HCP materials</span>' : '') + '</div>';

    var metaCells = [];
    if (p.dosing) metaCells.push({ k: 'Dose', v: p.dosing });
    if (p.form) metaCells.push({ k: 'Form', v: p.form });
    if (p.routes && p.routes.length) metaCells.push({ k: 'Route', v: p.routes.join(' · ') });
    if (p.reimbursement && p.reimbursement.length) metaCells.push({ k: 'Markets', v: p.reimbursement.join(' · ') });
    if (metaCells.length) {
      heroBody += '<div class="meta-row">' + metaCells.slice(0, 4).map(function (c) {
        return '<div><span class="k">' + esc(c.k) + '</span><span class="v">' + esc(c.v) + '</span></div>';
      }).join('') + '</div>';
    }
    heroBody += '</div>';

    var heroMedia = hasMedia
      ? '<figure class="product-media"><img src="' + esc(p.image) + '" alt="' + esc(p.name) + ' packaging" loading="lazy"><figcaption>Pack illustration · ' + esc(p.documentIds && p.documentIds[0] ? p.documentIds[0] : 'OTH-PACK') + '</figcaption></figure>'
      : '';

    var html =
      '<section class="pdp-hero' + (hasMedia ? ' has-media' : '') + '"><div class="container">' +
      (hasMedia ? '<div class="pdp-hero-shell">' + heroBody + heroMedia + '</div>' : heroBody) +
      '</div></section>';

    // Tabs
    html += '<section class="section"><div class="container">';
    html += '<div class="tabs" role="tablist">' +
      '<button role="tab" aria-selected="true" aria-controls="t-patient">Patient overview</button>' +
      '<button role="tab" aria-selected="false" aria-controls="t-hcp"' + (hcp ? '' : ' data-locked="true"') + '>HCP information</button>' +
      '<button role="tab" aria-selected="false" aria-controls="t-safety">Safety</button>' +
      '<button role="tab" aria-selected="false" aria-controls="t-reg">Regulatory documents</button>' +
      '<button role="tab" aria-selected="false" aria-controls="t-inq">Medical inquiry</button>' +
      '</div>';

    // Patient panel
    html += '<div id="t-patient" class="tab-panel"><div class="pdp-section">' +
      '<h2>About ' + esc(p.name) + '</h2>' +
      '<p class="lead">' + esc(p.summary) + '</p>' +
      '<p>' + esc(p.clinicalRole) + '</p>';
    if (p.indications && p.indications.length) {
      html += '<h3>Use contexts</h3><ul>' + p.indications.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>';
    }
    if (p.dosing) html += '<h3>How ' + esc(p.name) + ' is supplied</h3><p>' + esc(p.dosing) + ' · ' + esc(p.form || '') + '. ' + esc(p.routes ? p.routes.join(', ') : '') + '.</p>';
    if (p.ethicalNote) html += '<div class="safety-aside"><h4>Ethical position</h4><p>' + esc(p.ethicalNote) + '</p></div>';
    html += '</div></div>';

    // HCP panel — REAL gate: not in DOM if not authorized
    html += '<div id="t-hcp" class="tab-panel" hidden>';
    if (hcp) {
      html += '<div class="pdp-section">' +
        '<h2>Healthcare professional information</h2>' +
        '<p class="lead">' + esc(p.summary) + '</p>' +
        (p.mechanism ? '<h3>Mechanism profile</h3><p>' + esc(p.mechanism) + '</p>' : '') +
        (p.hsvNotes ? '<h3>Coordinate notes</h3><p>' + esc(p.hsvNotes) + '</p>' : '') +
        (p.contraindications && p.contraindications.length ? '<h3>Contraindications</h3><ul>' + p.contraindications.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' : '') +
        (p.monitoring && p.monitoring.length ? '<h3>Monitoring requirements</h3><ul>' + p.monitoring.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' : '') +
        (p.citations && p.citations.length ? '<h3>Selected citations</h3><ul>' + p.citations.map(function (c) { return '<li><strong>' + esc(c.ref) + '</strong> — ' + esc(c.title) + '</li>'; }).join('') + '</ul>' : '') +
        '</div>';
    } else {
      html += '<div class="pdp-section"><div class="locked-panel"><div class="lock"></div><div>' +
        '<h3>HCP information is not available for the selected audience.</h3>' +
        '<p>Detailed mechanism, dosing, contraindications and monitoring data are restricted to healthcare professionals, hospitals, regulators and authorized institutions. Change your audience selection to view this content.</p>' +
        '<p class="meta">Audience requirement: HCP / Hospital / Regulator / Institution</p>' +
        '<a class="btn btn-ghost" href="#" data-gate-open>Change audience</a>' +
        '</div></div></div>';
    }
    html += '</div>';

    // Safety panel
    html += '<div id="t-safety" class="tab-panel" hidden><div class="pdp-section">' +
      '<h2>Safety information</h2>' +
      '<p class="lead">Always contact a healthcare professional if the patient experiences breakthrough activation, unexpected blockade, loss of conscious access, severe fatigue or new neurological symptoms.</p>' +
      '<div class="safety-aside"><h4>Adverse event reporting</h4><p>Suspected adverse events should be reported through Ordinate\'s pharmacovigilance channel.</p>' +
      '<a class="btn btn-warn" href="report-adverse-event.html">Report an adverse event →</a></div>' +
      '</div></div>';

    // Regulatory documents
    html += '<div id="t-reg" class="tab-panel" hidden><div class="pdp-section">' +
      '<h2>Regulatory documents</h2>' +
      '<table class="reg-table"><thead><tr><th>Document</th><th>ID</th><th>Audience</th><th></th></tr></thead><tbody>' +
      ((p.documentIds || []).map(function (d) { return '<tr><td>' + docTypeFromId(d) + '</td><td class="compound">' + esc(d) + '</td><td>' + docAudienceFromId(d) + '</td><td><a href="medical-information.html">Request</a></td></tr>'; }).join('') || '<tr><td colspan="4" class="text-muted">No public regulatory documents listed for this product.</td></tr>') +
      ((p.registryIds || []).map(function (r) { return '<tr><td>Registry / authorization</td><td class="compound">' + esc(r) + '</td><td>Regulator</td><td>—</td></tr>'; }).join('')) +
      '</tbody></table>' +
      '</div></div>';

    // Medical inquiry
    html += '<div id="t-inq" class="tab-panel" hidden><div class="pdp-section">' +
      '<h2>Medical inquiry</h2>' +
      '<p>For medical or scientific questions about ' + esc(p.name) + ', submit a medical inquiry. Standard response time is five working days.</p>' +
      '<a class="btn primary" href="medical-information.html#inquiry">Submit medical inquiry →</a>' +
      '</div></div>';

    html += '</div></section>';

    // Related
    if (p.relatedIds && p.relatedIds.length) {
      html += '<section class="section alt"><div class="container">' +
        '<div class="section-head"><div><span class="eyebrow">Related</span><h2>Related products and programs</h2></div></div>' +
        '<div class="related-grid">' +
        p.relatedIds.map(function (id) {
          var r = byId(id);
          if (!r) return '';
          return '<a class="related-item" href="product.html?id=' + r.id + '"><h4>' + esc(r.name) + '</h4><p>' + esc(r.summary) + '</p></a>';
        }).join('') +
        '</div></div></section>';
    }

    return html;
  }

  function docTypeFromId(id) {
    if (/PIL/.test(id)) return 'Patient leaflet';
    if (/SmPC/.test(id)) return 'Summary of product characteristics';
    if (/HSP/.test(id)) return 'Hospital pharmacy supply protocol';
    if (/INST/.test(id)) return 'Institutional supervision framework';
    if (/OPSA/.test(id)) return 'Sport-regulator clarification';
    if (/PV/.test(id)) return 'Periodic safety update report';
    if (/DX/.test(id)) return 'Diagnostic device labeling';
    if (/PI/.test(id)) return 'Prescribing information';
    return 'Document';
  }
  function docAudienceFromId(id) {
    if (/PIL/.test(id)) return 'Patient';
    if (/HSP|INST/.test(id)) return 'Hospital / institution';
    if (/PV|SmPC/.test(id)) return 'HCP / regulator';
    return 'HCP';
  }

  function bindAudienceTabs(scope) {
    var lists = scope.querySelectorAll('[role="tablist"]');
    lists.forEach(function (list) {
      var tabs = list.querySelectorAll('[role="tab"]');
      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          tabs.forEach(function (t) { t.setAttribute('aria-selected', 'false'); });
          tab.setAttribute('aria-selected', 'true');
          var target = tab.getAttribute('aria-controls');
          var panels = list.parentNode.querySelectorAll('.tab-panel');
          panels.forEach(function (p) {
            if (p.id === target) p.removeAttribute('hidden');
            else p.setAttribute('hidden', '');
          });
        });
      });
    });
  }

  /* ============================================================
     13. RENDER — pigment matrix on pigment-medicine page
     ============================================================ */
  function renderPigmentMatrix() {
    var target = document.querySelector('[data-pigment-matrix]');
    if (!target) return;
    var ids = ['achromavir', 'leukostat', 'axisol', 'lumenveil', 'synaptide-p', 'kinetra', 'paxlumen', 'dermalux', 'oculite-p'];
    target.innerHTML =
      '<table class="reg-table"><thead><tr><th>Medicine</th><th>Class</th><th>Use context</th><th>Access</th></tr></thead><tbody>' +
      ids.map(function (id) {
        var p = byId(id); if (!p) return '';
        return '<tr><td class="name-cell"><a href="product.html?id=' + p.id + '">' + esc(p.name) + '</a></td><td>' + esc(p.className) + '</td><td>' + esc(p.summary) + '</td><td>' + accessBadge(p) + '</td></tr>';
      }).join('') +
      '</tbody></table>';
  }

  /* ============================================================
     14. RENDER — news list
     ============================================================ */
  function renderNewsList() {
    var target = document.querySelector('[data-news-list]');
    if (!target) return;
    target.innerHTML = '<div class="news-list">' + NEWS.map(function (n) {
      return '<article class="news-item">' +
        '<span class="date">' + esc(n.date) + '</span>' +
        '<div><span class="tag ' + (n.tagClass || '') + '">' + esc(n.tag) + '</span><h3>' + esc(n.title) + '</h3><p>' + esc(n.body) + '</p></div>' +
        '<a href="#" class="text-mono">Read →</a>' +
        '</article>';
    }).join('') + '</div>';
  }

  /* ============================================================
     15. AE form: conditional pigment fieldset
     ============================================================ */
  function bindAEForm() {
    var form = document.getElementById('ae-form');
    if (!form) return;
    var pf = form.querySelector('[data-pigment-fieldset]');
    form.querySelectorAll('input[name="pigment_status"]').forEach(function (r) {
      r.addEventListener('change', function () {
        if (!r.checked) return;
        if (r.value === 'carrier' && pf) pf.removeAttribute('hidden');
        else if (pf) pf.setAttribute('hidden', '');
      });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('Adverse event report received — reference ' + makeRef());
      form.reset();
      if (pf) pf.setAttribute('hidden', '');
    });
  }

  /* ============================================================
     16. Generic forms (medical info, contact, complaint, etc.)
     ============================================================ */
  function bindGenericForms() {
    document.querySelectorAll('form[data-generic]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var msg = form.getAttribute('data-success') || 'Submission received';
        showToast(msg + ' — reference ' + makeRef());
        form.reset();
      });
    });
  }

  /* ============================================================
     17. Restricted institutional inquiry — proper modal form
     ============================================================ */
  function bindRestrictedInquiry() {
    if (!document.getElementById('institutional-modal')) {
      var html =
        '<div id="institutional-modal" class="gate-overlay" hidden>' +
        '  <div class="gate-modal" role="dialog" aria-modal="true" style="border-top-color: var(--restricted)">' +
        '    <span class="eyebrow restricted">Restricted institutional inquiry</span>' +
        '    <h2>Authorized institutional access</h2>' +
        '    <p>This channel is reserved for authorized institutional users. Inquiries lacking valid authorization data are not processed and may be referred to the relevant regulator.</p>' +
        '    <form data-institutional class="form-stack" style="max-width:none">' +
        '      <div class="form-row">' +
        '        <label class="field"><span>Institution name *</span><input type="text" required name="institution"></label>' +
        '        <label class="field"><span>Country of authorization *</span><input type="text" required name="country"></label>' +
        '      </div>' +
        '      <div class="form-row">' +
        '        <label class="field"><span>Authorization reference *</span><input type="text" required name="auth_ref" placeholder="e.g. NL-MOD-2024-PG-114"></label>' +
        '        <label class="field"><span>Designated medical officer *</span><input type="text" required name="officer"></label>' +
        '      </div>' +
        '      <label class="field"><span>Officer email *</span><input type="email" required name="email"></label>' +
        '      <label class="field"><span>Product or program of interest *</span><input type="text" required name="program"></label>' +
        '      <label class="field"><span>Purpose of inquiry *</span><textarea required name="purpose" placeholder="State the legal basis, the program, the supervision framework and the requested next step."></textarea></label>' +
        '      <label class="field"><span><input type="checkbox" required> I confirm the institution above is operating under formal authorization.</span></label>' +
        '      <div class="gate-actions">' +
        '        <button type="button" class="btn btn-ghost" data-modal-close>Cancel</button>' +
        '        <button type="submit" class="btn btn-restricted">Submit institutional inquiry</button>' +
        '      </div>' +
        '    </form>' +
        '  </div>' +
        '</div>';
      document.body.insertAdjacentHTML('beforeend', html);
    }

    var modal = document.getElementById('institutional-modal');
    var form = modal.querySelector('form[data-institutional]');

    document.querySelectorAll('[data-restricted-inquiry]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        modal.removeAttribute('hidden');
        document.body.classList.add('gate-open');
      });
    });

    var closeBtn = modal.querySelector('[data-modal-close]');
    if (closeBtn) closeBtn.addEventListener('click', function () {
      modal.setAttribute('hidden', '');
      document.body.classList.remove('gate-open');
    });

    if (form) form.addEventListener('submit', function (e) {
      e.preventDefault();
      modal.setAttribute('hidden', '');
      document.body.classList.remove('gate-open');
      form.reset();
      showToast('Institutional inquiry queued — reference ' + makeRef() + '. A regulatory affairs officer will respond within 5 working days.');
    });
  }

  /* ============================================================
     18. Toast + utilities
     ============================================================ */
  var toastTimer = null;
  function showToast(msg) {
    var t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast'; t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.removeAttribute('hidden');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.setAttribute('hidden', ''); }, 5500);
  }

  function makeRef() {
    var d = new Date();
    var y = d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2);
    var r = Math.floor(Math.random() * 9000 + 1000);
    return 'ORD-' + y + '-' + r;
  }

  function byId(id) { for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].id === id) return PRODUCTS[i]; return null; }

  function esc(s) {
    if (s === null || s === undefined) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function truncate(s, n) { s = String(s); return s.length <= n ? s : s.slice(0, n - 1) + '…'; }
})();
