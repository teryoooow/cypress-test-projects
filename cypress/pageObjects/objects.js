export const loginObjects = {
    loginPageUrl : 'https://www.cnarios.com/challenges/login-flow',
    usernameInput: '#«r1»', 
    passwordInput: '#«r2»',
    loginButton: '.MuiCardContent-root > .MuiButtonBase-root',
    logoutButton: '.MuiCardContent-root > .MuiButtonBase-root'
}

export const ecommerceObjects = {
    productListingUrl: 'https://www.cnarios.com/challenges/product-listing-pagination',
    productCard: '.MuiCard-root',
    productName: 'h6.MuiTypography-root.MuiTypography-h6.font-semibold.css-1imvwru',
    productPrice: 'h6.MuiTypography-root.MuiTypography-h6.text-green-600.css-1imvwru',
    productRating: 'span[aria-label]',
    category: '.MuiContainer-root > div',
    pagination: '.MuiPagination-root',
    nextPageButton: '[aria-label="Go to next page"]',
    previousPageButton: '[aria-label="Go to previous page"]'
}

export const buttonObjects = {
    buttonPageUrl: 'https://www.cnarios.com/concepts/button',
    followButton: 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-fullWidth capitalize css-nqtpxt',
    unfollowButton: 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorSecondary MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorSecondary MuiButton-fullWidth capitalize css-nqtpxt'
}

export const formObjects = {
    formPageUrl: 'https://www.cnarios.com/concepts/form#try-it-yourself',
    eventForm: '[data-testid="event-registration-form"]',
    fullNameInput: '[data-testid="input-fullname"]',
    emailInput: '[data-testid="input-email"]',
    phoneInput: '[data-testid="input-phone"]',
    eventButton: '[class="MuiFormControl-root MuiFormControl-fullWidth css-17qa0m8"]',
    eventOption: '[data-value="evt-101"]', // Frontend Conf 2025
    eventOption2: '[data-value="evt-102"]', // Automation Summit
    eventOption3: '[data-value="evt-103"]', // Design & UX Meetup
    ticketsInput: '[data-testid="input-tickets"]',
    submitButton: '[data-testid="btn-submit"]',
    resetButton: '[data-testid="btn-reset"]',
    confirmButton: '[data-testid="btn-confirm"]',
    closeButton: '[fdprocessedid="9837m3"]',
    ticketID: '[data-testid="ticket-id-item"]'
    // error messages
    // fullNameError: '#«r1t»-helper-text»',
    // emailError: '.MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-nl47j',
    // phoneError: '#«r1v»-helper-text',
    // eventError: '#«r1w»-helper-text',
    // ticketsError: '#«r1x»-helper-text'
}

export const checkboxObjects = {
    checkboxPageUrl: 'https://www.cnarios.com/concepts/checkbox#try-it-yourself',
    setPreferencesButton: 'Set Preferences',
    technologyCheckbox: '.MuiDialogContent-root > .flex > :nth-child(1)',
    sportsCheckbox: '.MuiDialogContent-root > .flex > :nth-child(2)',
    businessCheckbox: '.MuiDialogContent-root > .flex > :nth-child(3)',
    scienceCheckbox: '.MuiDialogContent-root > .flex > :nth-child(4)',
    healthCheckbox: '.MuiDialogContent-root > .flex > :nth-child(5)',
    entertainmentCheckbox: '.MuiDialogContent-root > .flex > :nth-child(6)',
    doneButton: '.MuiDialogActions-root > .MuiButtonBase-root',
    newsFeed: '.max-w-3xl'
}

export const radioButtonObjects = {
    radioButtonPageUrl: 'https://www.cnarios.com/concepts/radio#try-it-yourself',
    submitButton: 'button.MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary w-full css-17j8wdr',
    radioButton: 'input[type="radio"]',
    answer1: '[value="get(url)"]', // Correct answer for Question 1
    answer2: 'input[type="radio"][value="To locate a single web element"]', // Correct answer for Question 2
    answer3: 'input[type="radio"][value="ID"]', // Correct answer for Question 3
    answer4: 'input[type="radio"][value="To provide explicit wait until a condition is met"]', // Correct answer for Question 4
    resultMessage: '.text-center',
    xAnswer1: '[value="open(url)"]', // Incorrect answer for Question 1
    xAnswer2: 'input[type="radio"][value="To submit a form"]', // Incorrect answer for Question 2
    xAnswer3: 'input[type="radio"][value="XPath"]', // Incorrect answer for Question 3
    xAnswer4: 'input[type="radio"][value="To stop execution permanently"]' // Incorrect answer for Question 4
}

export const datepickerObjects = {
    datepickerPageUrl: 'https://www.cnarios.com/concepts/datepicker#try-it-yourself',
    addEmploymentButton: 'Add Employment',
    companyInput: 'input[type="text"]',
    dateInput: 'input[type="date"]',
    startDateInput: '2022-01-01',
    endDateInput: '2023-01-01',
    deleteButton: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div > div > button',
    errorMessage: 'body > div.MuiDialog-root.MuiModal-root.css-1egf66k > div.MuiDialog-container.MuiDialog-scrollPaper.css-8azq84 > div > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiAlert-root.MuiAlert-colorWarning.MuiAlert-standardWarning.MuiAlert-standard.css-hb5djj > div.MuiAlert-message.css-127h8j3',
    addButton: 'body > div.MuiDialog-root.MuiModal-root.css-1egf66k > div.MuiDialog-container.MuiDialog-scrollPaper.css-8azq84 > div > div > div > button'
}

export const dropdownObjects = {
    dropdownPageUrl: 'https://www.cnarios.com/concepts/dropdown#try-it-yourself',
    selectCountryDropdown: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div > div > div',
    currency: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > h6',
    clearDropdownButton: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div > div > div > div > button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.MuiAutocomplete-clearIndicator.css-1o3l9i0'
}

export const timepickerObjects = {
    timepickerPageUrl: 'https://www.cnarios.com/concepts/timepicker#try-it-yourself',
    timeInput: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div > input',
    confirmButton: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > button',
    resultMessage: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiAlert-root.MuiAlert-colorSuccess.MuiAlert-standardSuccess.MuiAlert-standard.css-ne17bl > div.MuiAlert-message.css-127h8j3',
    errorResultMessage: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiAlert-root.MuiAlert-colorError.MuiAlert-standardError.MuiAlert-standard.css-qswqkh > div.MuiAlert-message.css-127h8j3'
}

export const alertObjects = {
    alertPageUrl: 'https://www.cnarios.com/concepts/alert#try-it-yourself',
    successAlertMessage: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div',
    deletionCancelledMessage: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div.mt-4.p-3.rounded.text-sm.font-medium.bg-gray-100.border.border-gray-300.text-gray-800',
    deleteButton: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div > button'
}

export const iframeObjects = {
    iframePageUrl: 'https://www.cnarios.com/concepts/iframe#try-it-yourself',
    iframeSelector: 'iframe',
    cardNumber: '#cardNumber',
    expiry: '#expiry',
    cvv: '#cvv',
    cardNumberErrorMessage: '#cardNumberError',
    expiryErrorMessage: '#expiryError',
    cvvErrorMessage: '#cvvError',
    successMessage: 'body > div.MuiDialog-root.MuiModal-root.css-1egf66k > div.MuiDialog-container.MuiDialog-scrollPaper.css-8azq84 > div',
    closeButton: 'body > div.MuiDialog-root.MuiModal-root.css-1egf66k > div.MuiDialog-container.MuiDialog-scrollPaper.css-8azq84 > div > div.MuiDialogActions-root.MuiDialogActions-spacing.css-8mwzdy > button',
    submitButton: '#pay-btn'
}

export const modalObjects = {
    modalPageUrl: 'https://www.cnarios.com/concepts/modal#try-it-yourself',
    modalBackdrop: 'body > div.MuiModal-root.css-1sucic7 > div.MuiBackdrop-root.MuiModal-backdrop.css-14dl35y',
    modalSelector: 'body > div.MuiModal-root.css-1sucic7 > div.MuiBox-root.css-19zhusc > h6',
    item: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div',
    modalCancelButton: 'body > div.MuiModal-root.css-1sucic7 > div.MuiBox-root.css-19zhusc > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-colorPrimary.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-colorPrimary.css-4tzcoq',
    modalDeleteButton: 'body > div.MuiModal-root.css-1sucic7 > div.MuiBox-root.css-19zhusc > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedError.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorError.MuiButton-root.MuiButton-contained.MuiButton-containedError.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorError.css-189juul',
    deleteItemButton: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > button'
}

export const tooltipObjects = {
    tooltipPageUrl: 'https://www.cnarios.com/concepts/tooltip#try-it-yourself',
    emailTooltip: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > form > div:nth-child(1) > button',
    topicTooltip: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > form > div:nth-child(2) > button',
    tooltipText: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > form > div:nth-child(1) > button > svg',
    emailInput: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > form > div:nth-child(1) > div > div',
    topicInput: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > form > div:nth-child(2) > div > div',
    submitButton: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > form > div.text-center.pt-4.MuiBox-root.css-0 > span > button'
}

export const keyboardObjects = {
    keyboardPageUrl: 'https://www.cnarios.com/concepts/keyboard#try-it-yourself',
    submitButton: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div.flex.items-start.gap-2.MuiBox-root.css-0 > button',
    inputField: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div.flex.items-start.gap-2.MuiBox-root.css-0 > div > div',
    submittedText: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div.flex-1.space-y-3.max-h-80.overflow-y-auto.flex.gap-1.flex-col.MuiBox-root.css-0 > p',
    textLink: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div.flex-1.space-y-3.max-h-80.overflow-y-auto.flex.gap-1.flex-col.MuiBox-root.css-0 > p > a',
    textLinkPreview: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div.text-xs.text-gray-500.MuiBox-root.css-0 > a',
    textPreview: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div.text-xs.text-gray-500.MuiBox-root.css-0'
}

export const tableObjects = {
    tablePageUrl: 'https://www.cnarios.com/concepts/table#try-it-yourself',
    table: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1vqvrdr',
    tableSearch: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div.flex.justify-between.mb-4 > div > div',
    addEmployee: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div.flex.justify-between.mb-4 > button',
    positionColumn: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1vqvrdr > table > thead > tr > th:nth-child(2) > div',
    employeeForm: 'body > div.MuiDialog-root.MuiModal-root.css-1egf66k > div.MuiDialog-container.MuiDialog-scrollPaper.css-8azq84 > div',
    employeeName: 'body > div.MuiDialog-root.MuiModal-root.css-1egf66k > div.MuiDialog-container.MuiDialog-scrollPaper.css-8azq84 > div > div.MuiDialogContent-root.flex.flex-col.gap-6.css-1nbx5hx > div:nth-child(1) > div',
    employeePosition: 'body > div.MuiDialog-root.MuiModal-root.css-1egf66k > div.MuiDialog-container.MuiDialog-scrollPaper.css-8azq84 > div > div.MuiDialogContent-root.flex.flex-col.gap-6.css-1nbx5hx > div:nth-child(2) > div',
    employeeDepartment: 'body > div.MuiDialog-root.MuiModal-root.css-1egf66k > div.MuiDialog-container.MuiDialog-scrollPaper.css-8azq84 > div > div.MuiDialogContent-root.flex.flex-col.gap-6.css-1nbx5hx > div:nth-child(3) > div',
    employeeLocation: 'body > div.MuiDialog-root.MuiModal-root.css-1egf66k > div.MuiDialog-container.MuiDialog-scrollPaper.css-8azq84 > div > div.MuiDialogContent-root.flex.flex-col.gap-6.css-1nbx5hx > div:nth-child(4) > div',
    employeeEmail: 'body > div.MuiDialog-root.MuiModal-root.css-1egf66k > div.MuiDialog-container.MuiDialog-scrollPaper.css-8azq84 > div > div.MuiDialogContent-root.flex.flex-col.gap-6.css-1nbx5hx > div:nth-child(5) > div',
    saveButton: 'body > div.MuiDialog-root.MuiModal-root.css-1egf66k > div.MuiDialog-container.MuiDialog-scrollPaper.css-8azq84 > div > div.MuiDialogActions-root.MuiDialogActions-spacing.css-8mwzdy > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.css-17j8wdr',
    cancelButton: 'body > div.MuiDialog-root.MuiModal-root.css-1egf66k > div.MuiDialog-container.MuiDialog-scrollPaper.css-8azq84 > div > div.MuiDialogActions-root.MuiDialogActions-spacing.css-8mwzdy > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-colorPrimary.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-colorPrimary.css-j7n7h8',
    editButton: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1vqvrdr > table > tbody > tr:nth-child(1) > td:nth-child(6) > button:nth-child(1)',
    deleteButton: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1vqvrdr > table > tbody > tr:nth-child(1) > td:nth-child(6) > button:nth-child(2)'
}

export const multiwindowObjects = {
    multiwindowPageUrl: 'https://www.cnarios.com/concepts/multiwindow#try-it-yourself',
    learnAboutButtonLink: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div:nth-child(1) > div > ul > li:nth-child(1)',
    learnAboutTimePickerLink: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div:nth-child(2) > div > ul > li:nth-child(1)',
    brokenLink: 'a[href="/concepts/xyz"]',
    notFoundHeader: '#root > div > div.min-h-screen.flex.flex-col.justify-center.items-center.bg-gray-100.text-center.px-4 > h1',
    basicButton: '#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.py-6.css-17nsc56 > div > div > div.tab-content.MuiBox-root.css-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mb-6.css-x0wmhw > div > div > div:nth-child(1) > div > ul > li:nth-child(1)'
}