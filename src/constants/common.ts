

export const privacyPolicy = '';
export const tAndC = '';

export const userTypes = {
  ADMIN: 'admin',
  EMPLOYEE: 'employee',
  AGENT: 'agent',
  REAL_ESTATE_AGENT: 'real_estate_agent',
  NON_REAL_ESTATE_AGENT: 'non_real_estate_agent',
  BUILDER: 'builder',
  CUSTOMER: 'customer',
  INDIVIDUAL: 'Individual',
  ORGANIZATION: 'Organization'
}


export const genderList = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' }
]

export const OccupationList = [
  {
    "label": "Housewife",
    "value": "Housewife"
  },
  {
    "label": "Student",
    "value": "Student"
  },
  {
    "label": "IT Employee",
    "value": "IT Employee"
  },
  {
    "label": "Government",
    "value": "Government"
  },
  {
    "label": "Private",
    "value": "Private"
  },
  {
    "label": "Others",
    "value": "Others"
  }
]

export const buyData = [
  { label: 'Rent', value: 'Rent' },
  { label: 'Buy', value: 'buy' }
]

export enum USERTYPES {
  ADMIN = 'admin',
  EMPLOYEE = 'employee',
  REAL_ESTATE_AGENT = 'real_estate_agent',
  NON_REAL_ESTATE_AGENT = 'non_real_estate_agent',
  BUILDER = 'builder',
  CUSTOMER = 'customer',
  PARTNER = 'partner',
}
export enum LOGINTYPE {
  PHONE = 'phone',
  EMAIL = 'email',
}
export enum OFFICIALMOBILETYPES {
  COMPANY_OWNED_COMPANY_PAID = 'company_owned_company_paid',
  COMPANY_OWNED_SELF_PAID = 'company_owned_self_paid',
  PERSONAL = 'personal',
}
export enum MEMBERTYPES {
  SALARIED = 'salaried',
  FREELANCER = 'freelancer',
  NOT_DEFINED = 'not_defined',
}
export enum GENDERS {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
  NOT_SPECIFIED = 'not_specified',
}
export enum REGIONS {
  GLOBAL = 'global',
  NORTH = 'north',
  SOUTH = 'south',
  WEST = 'west',
}
export enum EMPLOYMENTSTATUSES {
  ONROLL = 'on_roll',
  OFFROLL = 'off_roll',
}
export enum ADDRESSTYPES {
  PERMANENT = 'permanent',
  CORRESPONDENCE = 'correspondence',
  NOT_DEFINED = 'not_defined',
}
export enum DOCTYPE {
  AADHAR = 'aadhar_card',
  PAN = 'pan_card',
  GST = 'gst',
  AVATAR = 'avatar',
  RESUME = 'resume',
  PROJECT = 'project',
  PROPERTY = 'property',
}
export enum DOC_SUB_TYPE {
  BANNER = 'banner',
  GALLERY = 'gallery',
}
export enum MODULES {
  UserModule = 'UserModule',
  RoleModule = 'RoleModule',
  PropertyModule = 'PropertyModule',
  LeadModule = 'LeadModule',
}
export const PERMISSIONS = {
  Read: 'Read',
  Create: 'Create',
  Update: 'Update',
  Delete: 'Delete',
};
// Property/Inventoriesexport enum PROPERTY_TYPE { RESIDENTIAL = 'Residential', COMMERCIAL = 'Commercial', } export enum SUB_PROPERTY_TYPE { APARTMENTS = 'Apartments', INDEPENDENT_FLOOR = 'IndependentFloor', OFFICE_SPACE = 'OfficeSpace', PENT_HOUSE = 'PentHouse', PLOT = 'Plot', SHOP = 'Shop', VILLAS = 'Villas', } export const FirebaseDynamicLinkApi = 'https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=';