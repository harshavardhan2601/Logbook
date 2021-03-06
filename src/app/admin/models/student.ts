export interface studentModal {
    role_id: Number,
    role_name: String,
    email: String,
    password: String,
    student_type: String,
    personal_details: {},
    firstName: String,
    middleName: String,
    lastName: String,
    nickname: String,
    dob: String,
    gender: String,
    bloodgroup: String,
    allergies: String,
    healthIssue: String,
    phoneNumber: Number,
    photo: String,
    parent_guardian_information: {},
    parent_first_name: String,
    parent_middile_name: String,
    parent_last_name: String,
    parent_phone: Number,
    parent_email: String
    address_details: {},
    current_address: String,
    current_city: String,
    current_state: String,
    current_post: Number,
    permanent_address: String,
    permanent_city: String,
    permanent_state: String,
    permanent_post: String,
    license_spl: {},
    spl_license: String
    spl_issue_date: String,
    spl_no: Number,
    spl_exp_date: String,
    spl_attach: String,
    spl_attach_hidden: String,
    FRTOLR_license: String
    license_frtol_r: {},
    frtol_r_no: String,
    frtol_r_issue_date: String,
    frtol_r_exp_date: String,
    frtol_r_attach: String,
    frtol_r_attach_hidden: String,
    // license_frtol: {},
    license_frtol: String,
    frtol_no: String,
    frtol_issue_date: String,
    frtol_exp_date: String,
    frtol_attach: String,
    // license_coprtr: {},
    license_coprtr: String,
    coprtr_no: String,
    coprtr_issue_date: String,
    coprtr_exp_date: String,
    coprtr_attach: String,
    license_ppl: {},
    license_cpl: {},
    license_chpl: {},
    license_atpl: {},
    license_ir: {},
    certificates_medical: {},
    certificates_refresher: {},
    certificates_avsec: {},
    exp_single_engine: {},
    exp_multi_engine: {},
    hours_flown_single: {},
    hours_flown_multi: {},
    instrument: {},
    attach_log_book: String,
    language: String,
    english_level_type1: String,
    languageDate: String,
    user_signature: String,
    ticket_id: String,
    status: Number,
    terms: String,
}