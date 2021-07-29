import axios from "axios";
import { CashTransactionsConstants, PagingConstants } from "../utils";

const url = "http://localhost:8000/";
const base = "api/v1";

/********************************************Address routes********************************************/
export const listAllAddresses = () => axios.get(url + base + "/address/all");

export const fetchAddressById = (addressId) => axios.get(url + base + "/address/" + addressId);

export const addOrEditAddress = (addressId, data) => axios.put(url + base + "/address/" + addressId, data);

export const deleteAddress = (addressId) => axios.delete(url + base + "/address/" + addressId);


/********************************************Administration routes********************************************/
export const listRoles = () => axios.get(url + base + "/administration/roles/list");

export const fetchUsersInRole = (roleId) => axios.get(url + base + `/administration/roles/users?roleId=${roleId}`);

export const editUsersInRole = (roleId, data) => axios.put(url + base + `/administration/roles/users?roleId=${roleId}`, data);

export const addRole = (data) => axios.post(url + base + "/administration/roles", data);


/********************************************Auth routes********************************************/
export const register = () => axios.post(url + base + "/auth/register");

export const login = (customerNo, password) => axios.post(url + base + "/auth/login", { customerNo, password });

export const forgotPassword = (email) => axios.post(url + base + `/auth/forgot-password?email=${email}`);

export const confirmEmail = (userId, token) => axios.post(url + base + `/auth/confirm-email?userId=${userId}&token=${token}`);

export const checkEmailExists = (email) => axios.post(url + base + `/auth/check-email-exists?email=${email}`);

export const resetPassword = () => axios.post(url + base + "/auth/reset-password");


/********************************************Bank Accounts routes********************************************/
export const listAllBankAccounts = () => axios.get(url + base + "/bank-accounts/all");

export const fetchBankAccountsByCustomerId = (customerId) => axios.get(url + base + "/bank-accounts/customer/" + customerId);

export const fetchBankAccountById = (accountId) => axios.get(url + base + "/bank-accounts/" + accountId);

export const fetchBankAccountByAccountNo = (accountNo) => axios.get(url + base + "/bank-accounts/account-no/" + accountNo);

export const fetchBankAccountByIBAN = (iban) => axios.get(url + base + "/bank-accounts/iban/" + iban);

export const validateRecipientBankAccount = (recipientData) => axios.post(url + base + "/bank-accounts/validate-recipient", recipientData);

export const addOrEditBankAccount = (accountId, data) => axios.put(url + base + "/bank-accounts/" + accountId, data);


/********************************************Branches routes********************************************/
export const listBranches = (
    countryId = null,
    cityId = null,
    districtId = null,
    pageNumber = PagingConstants.MinPageNumber,
    pageSize = PagingConstants.DefaultPageSize) => {

    let relativeUrl = `/branches/list?pageNumber=${pageNumber}&pageSize=${pageSize}`

    if (countryId)
        relativeUrl = `${relativeUrl}&countryId=${countryId}`

    if (cityId)
        relativeUrl = `${relativeUrl}&cityId=${countryId}`

    if (districtId)
        relativeUrl = `${relativeUrl}&districtId=${districtId}`

    return axios.get(url + base + relativeUrl);
}

export const fetchBranchById = (branchId) => axios.get(url + base + "/branches/" + branchId);

export const addOrEditBranch = (branchId, data) => axios.put(url + base + "/branches/" + branchId, data);

export const deleteBranch = (branchId) => axios.delete(url + base + "/branches/" + branchId);


/********************************************Countries routes********************************************/
export const listCities = (countryId = null) => {
    let relativeUrl = '/cities/list'

    if (countryId)
        relativeUrl = `${relativeUrl}?countryId=${countryId}`

    return axios.get(url + base + relativeUrl);
}

export const fetchCityById = (cityId) => axios.get(url + base + "/cities/" + cityId);

export const addOrEditCity = (cityId, data) => axios.put(url + base + "/cities/" + cityId, data);

export const deleteCity = (cityId) => axios.delete(url + base + "/cities/" + cityId);


/********************************************Countries routes********************************************/
export const listAllCountries = () => axios.get(url + base + "/Countries/all");

export const fetchCountryById = (cityId) => axios.get(url + base + "/Countries/" + cityId);

export const addOrEditCountry = (countryId, data) => axios.put(url + base + "/Countries/" + countryId, data);

export const deleteCountry = (countryId) => axios.delete(url + base + "/Countries/" + countryId);


/********************************************Credit Cards routes********************************************/
export const listAllCreditCards = (pageNumber = PagingConstants.MinPageNumber, pageSize = PagingConstants.DefaultPageSize) =>

    axios.get(url + base + `/credit-cards/list?pageNumber=${pageNumber}&pageSize=${pageSize}`);

export const fetchCreditCardsByIBAN = (iban) =>
    axios.get(url + base + "/credit-cards/" + iban);

export const fetchCreditCardById = (creditCardId) => axios.get(url + base + "/credit-cards/" + creditCardId);

export const fetchCreditCardByAccountNo = (accountNo) => axios.get(url + base + "/credit-cards/account-no/" + accountNo);

export const validateCreditCardPIN = (data) => axios.post(url + base + "/credit-cards/validate-pin", data);

export const addOrEditCreditCard = (creditCardId, data) => axios.put(url + base + "/credit-cards/" + creditCardId, data);

export const activateCreditCard = (creditCardId) => axios.put(url + base + "/credit-cards/activate/" + creditCardId);

export const deactivateCreditCard = (creditCardId) => axios.put(url + base + "/credit-cards/deactivate/" + creditCardId);


/********************************************Customers routes********************************************/
export const listAllCustomers = (pageNumber = PagingConstants.MinPageNumber,
    pageSize = PagingConstants.DefaultPageSize) =>

    axios.get(url + base + `/customers/list?pageNumber=${pageNumber}&pageSize=${pageSize}`);

export const searchCustomersByName = () => axios.get(url + "/customers/search");

export const fetchCustomerById = (customerId) => axios.get(url + "/customers/" + customerId);

export const fetchCustomerByAccountNo = (accountNo) => axios.get(url + "/customers/" + accountNo);

export const fetchCustomerByIBAN = (iban) => axios.get(url + "/customers/" + iban);

export const addOrEditCustomer = (customerId, data) => axios.put(url + "/customers/" + customerId, data);


/********************************************Districts routes********************************************/
export const listDistricts = (cityId = null) => {
    let relativeUrl = '/districts/list'

    if (cityId)
        relativeUrl = `${relativeUrl}?cityId=${cityId}`

    return axios.get(url + base + relativeUrl);
}

export const fetchDistrictById = (districtId) => axios.get(url + base + "/districts/" + districtId);

export const addOrEditDistrict = (districtId, data) => axios.put(url + base + "/districts/" + districtId, data);

export const deleteDistrict = (districtId) => axios.delete(url + base + "/districts/" + districtId);


/********************************************Cash Transactions routes********************************************/
export const listCashTransactionsByAccountNo = (accountNo,
    lastDays = CashTransactionsConstants.DefaultFromNumberOfDays,
    pageNumber = PagingConstants.MinPageNumber,
    pageSize = PagingConstants.DefaultPageSize) =>
    axios.get(url + base + `/cash-transactions/list/account-no/${accountNo}?lastDays=${lastDays}&pageNumber=${pageNumber}&pageSize=${pageSize}`);


export const listCashTransactionsByIBAN = (iban,
    lastDays = CashTransactionsConstants.DefaultFromNumberOfDays,
    pageNumber = PagingConstants.MinPageNumber,
    pageSize = PagingConstants.DefaultPageSize) =>
    axios.get(url + base + `/cash-transactions/list/iban/${iban}?lastDays=${lastDays}&pageNumber=${pageNumber}&pageSize=${pageSize}`);


export const fetchLatestTransfersByIBAN = (iban) => axios.get(url + "/cash-transactions/latest/iban/" + iban);

export const addCashTransaction = (data) => axios.post(url + "/cash-transactions", data);


/********************************************Fast Transactions routes********************************************/
export const listAllFastTransactions = () => axios.get(url + "/fast-transactions/all");

export const fetchFastTransactionsByIBAN = (iban) => axios.get(url + "/fast-transactions/iban/" + iban);

export const addOrEditFastTransaction = (id, data) => axios.put(url + "/fast-transactions/" + id, data);
