document.addEventListener("DOMContentLoaded", function() {
    const terms = [
        {
            word: 'Cash',
            typeOfAccount: 'Asset',
            definition: 'Cash represents physical currency and balances in bank accounts that are readily available for immediate use, crucial for meeting short-term financial obligations.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash on Hand',
            typeOfAccount: 'Asset',
            definition: 'This account refers to the amount of physical currency (coins and bills) that a business has readily available for immediate use in its operations.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash Local Treasury',
            typeOfAccount: 'Asset',
            definition: 'This account is used to record in the book of barangays the amount of cash in the Local Treasury.',
            normalBalance: 'Debit'
        },
        {
            word: 'Petty Cash',
            typeOfAccount: 'Asset',
            definition: 'Amount of cash granted to designated Petty Cash Custodian for payment of authorized petty or miscellaneous expenses which cannot be conveniently paid thru check.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash in Bank - Local Currency',
            typeOfAccount: 'Asset',
            definition: 'This account refers to the amount of money that a business holds in its bank accounts in the local currency.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash in Bank - Local Currency, Current Account',
            typeOfAccount: 'Asset',
            definition: 'Cash in local currency deposited in current account with Authorized Government Depository Banks.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash in Bank - Local Currency, Savings Account',
            typeOfAccount: 'Asset',
            definition: 'Cash in local currency deposited in savings account with Authorized Government Depository Banks.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash in Bank - Foreign Currency',
            typeOfAccount: 'Asset',
            definition: 'This account represents cash balances denominated in foreign currencies, which are held in bank accounts and are available for use in transactions or for investment purposes.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash in Bank - Foreign Currency, Current Account',
            typeOfAccount: 'Asset',
            definition: 'Cash in foreign currency deposited in current account with Authorized Government Depository Banks.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash in Bank - Foreign Currency, Savings Account',
            typeOfAccount: 'Asset',
            definition: 'Cash in foreign currency deposited in savings account with Authorized Government Depository Banks.',
            normalBalance: 'Debit'
        },
        {
            word: 'Investments',
            typeOfAccount: 'Asset',
            definition: 'This is an asset or item acquired with the goal of generating income or appreciation. Appreciation refers to an increase in the value of an asset over time. When an individual purchases a good as an investment, the intent is not to consume the good but rather to use it in the future to create wealth.',
            normalBalance: 'Debit'
        },
        {
            word: 'Investments in Time Deposits',
            typeOfAccount: 'Asset',
            definition: 'This account is used to record placement in local currency with Authorized Government Depository Banks of excess cash or cash not earmarked for immediate use for a specified period.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash in Bank - Local Currency, Time Deposits',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize authorized placements of cash in local currency with Authorized Government Depository Banks for a specific period of time. Credit this account for withdrawal of placements.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash in Bank - Foreign Currency, Time Deposits',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize placements of cash in foreign currency with Authorized Government Depository Banks for a specific period of time. Credit this account for withdrawal of placements.',
            normalBalance: 'Debit'
        },
        {
            word: 'Treasury Bills',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize amounts placed in a 90-day and below treasury bills issued by the National Government thru the BTr. Credit this account when the rights to the cash flows have expired or transferred to another party thru resale or other disposition.',
            normalBalance: 'Debit'
        },
        {
            word: 'Financial Assets at Fair Value Through Surplus or Deficit',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize financial assets that, upon initial recognition, are designated by the entity as at fair value through profit or loss. This shall comprise of both debt and equity securities and shall be accounted for in the same manner as held for trading securities. Credit this account when the rights to the cash flows have expired or transferred to another party thru resale or other disposition.',
            normalBalance: 'Debit'
        },
        {
            word: 'Financial Assets Held for Trading',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize debt and equity securities that are: (a) acquired principally for the purpose of selling or repurchasing them in the near term; or (b) part of a portfolio of identified securities that are managed together and for which there is evidence of a recent actual pattern of short-term profit-taking.',
            normalBalance: 'Debit'
        },
        {
            word: 'Financial Assets Designated at Fair Value Through Surplus or Deficit',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize financial assets that, upon initial recognition, are designated by the entity as at fair value through surplus/profit or deficit/loss.',
            normalBalance: 'Debit'
        },
        {
            word: 'Financial Assets - Held to Maturity',
            typeOfAccount: 'Asset',
            definition: 'These are non-derivative assets with fixed or determinable payments and fixed maturities which the Group intends to hold to maturity (e.g. subscribed bonds). The intention and ability to hold the security to maturity has to be evaluated on initial recognition and confirmed at the end of each reporting period.',
            normalBalance: 'Debit'
        },
        {
            word: 'Investments in Treasury Bills - Local',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize money invested in treasury bills with 91 days and above maturity issued in the local stock market.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - Investments in Treasury Bills - Local',
            typeOfAccount: 'Asset',
            definition: 'This account is credited when there is objective evidence that the investments in local treasury bills are impaired.',
            normalBalance: 'Credit'
        },
        {
            word: 'Investments in Bonds-Local',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize investments in bonds issued by the BTr and other local investees.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - Investments in Bonds - Local',
            typeOfAccount: 'Asset',
            definition: 'This account is credited when there is objective evidence that the investments in local bonds are impaired.',
            normalBalance: 'Credit'
        },
        {
            word: 'Financial Assets - Available for Sale',
            typeOfAccount: 'Asset',
            definition: 'This is a residual category represented by non-derivative financial assets that are designated as available for sale and which have not been assigned to one of the previous categories. “Available-for-sale financial assets” are recorded at their fair value including related purchase costs. They are classified as non-current assets, unless management intends to dispose of them within 12 months from the end of the reporting period.',
            normalBalance: 'Debit'
        },
        {
            word: 'Investments in Stocks',
            typeOfAccount: 'Asset',
            definition: 'Amount of authorized investments in stocks.',
            normalBalance: 'Debit'
        },
        {
            word: 'Investments in Bonds',
            typeOfAccount: 'Asset',
            definition: 'Amount of authorized investments in bonds.',
            normalBalance: 'Debit'
        },
        {
            word: 'Financial Assets - Others',
            typeOfAccount: 'Asset',
            definition: 'This account refers to various financial instruments such as investments in private companies, derivative financial instruments, and other debt instruments.',
            normalBalance: 'Debit'
        },
        {
            word: 'Deposits on Letters of Credit',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize the amount paid by the government corporation to the bank for opening letters of credit.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - Deposits in Letters of Credit',
            typeOfAccount: 'Asset',
            definition: 'It represents the estimated portion of deposits made by a company in letters of credit that may not be recoverable, typically due to the risk of default by the counterparty or other factors.',
            normalBalance: 'Credit'
        },
        {
            word: 'Guaranty Deposits',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize amount deposited for goods such as deposit for containers and deposits made to guarantee compliance with the terms of an agreement.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - Guaranty Deposits',
            typeOfAccount: 'Asset',
            definition: 'It represents the estimated portion of guaranty deposits that may not be recoverable, typically due to the risk of default by the counterparty or other factors.',
            normalBalance: 'Credit'
        },
        {
            word: 'Other Investments',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize the amount of other investments which cannot be classified under any of the specific investment accounts.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - Other Investments',
            typeOfAccount: 'Asset',
            definition: 'This account is credited to reduce the cost/amortized cost/fair value of other investments due to impairment.',
            normalBalance: 'Credit'
        },
        {
            word: 'Investments in Joint Venture',
            typeOfAccount: 'Asset',
            definition: 'It represent equity investments in entities over which a company has joint control, typically exercised through contractual arrangements, where the company has significant influence but does not have control over the financial and operating policies.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - Investments in Joint Venture',
            typeOfAccount: 'Asset',
            definition: 'This account is credited to reduce the cost/amortized cost/fair value of investments due to impairment.',
            normalBalance: 'Credit'
        },
        {
            word: 'Sinking Fund',
            typeOfAccount: 'Asset',
            definition: 'This is a type of fund that is created and set up purposely for repaying debt. The owner of the account sets aside a certain amount of money regularly and uses it only for a specific purpose.',
            normalBalance: 'Debit'
        },
        {
            word: 'Receivables',
            typeOfAccount: 'Asset',
            definition: 'Receivables, also regarded as accounts receivable, are debts owed to a firm by its customers for goods or services used or delivered but not yet paid for.',
            normalBalance: 'Debit'
        },
        {
            word: 'Loans and Receivable Accounts',
            typeOfAccount: 'Asset',
            definition: 'This represent amounts due to a company from loans made to customers, suppliers, employees, or other parties, typically recorded as assets on the balance sheet.',
            normalBalance: 'Debit'
        },
        {
            word: 'Accounts Receivable',
            typeOfAccount: 'Asset',
            definition: 'Amount due from customers arising from services rendered, trading/business transactions or sale of merchandise or property.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - Accounts Receivable',
            typeOfAccount: 'Asset',
            definition: 'This account is credited upon recognition of impairment which may arise from non-collection.',
            normalBalance: 'Credit'
        },
        {
            word: 'Real Property Tax Receivable',
            typeOfAccount: 'Asset',
            definition: 'Amount of basic real property tax due from real property owners.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - RPT Receivable',
            typeOfAccount: 'Asset',
            definition: 'It represents the estimated portion of real property tax receivable that may not be collectible, typically due to financial difficulties or other factors.',
            normalBalance: 'Credit'
        },
        {
            word: 'Special Education Tax Receivable',
            typeOfAccount: 'Asset',
            definition: 'Amount of additional levy on real property tax due from real property owners for the Special Education Fund.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - SET Receivable',
            typeOfAccount: 'Asset',
            definition: 'It represents the estimated portion of special education tax receivable that may not be collectible, typically due to financial difficulties or other factors.',
            normalBalance: 'Credit'
        },
        {
            word: 'Notes Receivable',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize claims expected to be received at a future date, usually with interest, for which a formal instrument of credit is used as evidence of debt, such as promissory notes, time drafts or trade acceptances or other negotiable financial instruments acquired from debtors.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - Notes Receivable',
            typeOfAccount: 'Asset',
            definition: 'This account is credited upon recognition of the amount to reduce the amortized cost of notes receivable due to impairment, which may arise from non-collection.',
            normalBalance: 'Credit'
        },
        {
            word: 'Loans Receivable - Government-Owned and/or Controlled Corporations',
            typeOfAccount: 'Asset',
            definition: 'Amount of loans due from Government-Owned and/or Controlled Corporations (GOCCs).',
            normalBalance: 'Debit'
        },
        {
            word: "Allowance for Impairment - Loans Receivable - Government-Owned and/or Controlled Corporations",
            typeOfAccount: "Asset",
            definition: "It represents the estimated portion of loans receivable from government-owned and/or controlled corporations that may not be collectible, typically due to financial difficulties or other factors.",
            normalBalance: "Credit"
        },
        {
            word: "Loans Receivable - Local Government Units",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize amounts of credit extended to local government units covered by loan agreements.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Loans Receivable - Local Government Units",
            typeOfAccount: "Asset",
            definition: "This account is credited upon set-up of provision for losses which may arise from the non-collection of loans receivable from local government units.",
            normalBalance: "Credit"
        },
        {
            word: "Interests Receivable",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize amounts of accrued interests on advances, investments, and loans and receivables.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Interests Receivable",
            typeOfAccount: "Asset",
            definition: "This account is credited upon set-up of provision for losses which may arise from the non-collection of interests receivable.",
            normalBalance: "Credit"
        },
        {
            word: "Dividends Receivable",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the amount of cash dividends earned but not yet received on shares of stocks owned by the government corporations that are held as Held for Trading, Designated at Fair Value through Surplus/Profit or Deficit/Loss, Available for Sale and other investments.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Dividends Receivable",
            typeOfAccount: "Asset",
            definition: "This account is credited to reduce the amortized cost of dividends receivable due to impairment, which may arise from non-collection of the receivables.",
            normalBalance: "Credit"
        },
        {
            word: "Loans Receivable - Others",
            typeOfAccount: "Asset",
            definition: "Amount of loans due from entities other than GOCCs and LGUs",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Loans Receivable - Others",
            typeOfAccount: "Asset",
            definition: "",
            normalBalance: "Credit"
        },
        {
            word: "Lease Receivables",
            typeOfAccount: "Asset",
            definition: "It represent amounts due to a company from leasing agreements, where the company is the lessor and earns rental income from leasing out assets such as property, equipment, or vehicles to lessees.",
            normalBalance: "Debit"
        },
        {
            word: "Operating Lease Receivable",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the accrual of rental income from lease of assets.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Operating Lease Receivable",
            typeOfAccount: "Asset",
            definition: "This account is credited upon set-up of provision for losses which may arise from the non-collection of the operating lease receivables.",
            normalBalance: "Credit"
        },
        {
            word: "Finance Lease Receivable",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the amount due from sale of government property on installment basis.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Finance Lease Receivable",
            typeOfAccount: "Asset",
            definition: "This account is credited upon set-up of provision for losses which may arise from the non-collection of finance lease receivable.",
            normalBalance: "Credit"
        },
        {
            word: "Inter-Agency Receivables",
            typeOfAccount: "Asset",
            definition: "It represent amounts due to a government agency from other government agencies for goods or services provided, typically recorded as assets on the balance sheet until payment is received.",
            normalBalance: "Debit"
        },
        {
            word: "Due from National Government Agencies",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize advances for purchase of goods/services as authorized by law, fund transfers to the National Government Agencies (NGAs) for implementation of projects and other receivables from NGAs.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Due from National Government Agencies",
            typeOfAccount: "Asset",
            definition: "It represents the estimated portion of receivables from national government agencies that may not be collectible, typically due to financial difficulties or other factors.",
            normalBalance: "Credit"
        },
        {
            word: "Due from Government-Owned and/or Controlled Corporations",
            typeOfAccount: "Asset",
            definition: "It represents the estimated portion of receivables from government-owned and controlled corporations (GOCCs) that may not be collectible, typically due to financial difficulties or other factors.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Due from GOCCs",
            typeOfAccount: "Asset",
            definition: "It represents the estimated portion of receivables from government-owned and controlled corporations (GOCCs) that may not be collectible, typically due to financial difficulties or other factors.",
            normalBalance: "Credit"
        },
        {
            word: "Due from Local Government Units",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize amount of advances for purchase of goods/services as authorized by law, fund transfers to the Local Government Units (LGUs) for implementation of projects, share from LGUs income and other receivables.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Due from LGUs",
            typeOfAccount: "Asset",
            definition: "It represents the estimated portion of receivables from local government units (LGUs) that may not be collectible, typically due to financial difficulties or other factors.",
            normalBalance: "Credit"
        },
        {
            word: "Due from Joint Venture",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize receivables from joint venture pertaining to obligations paid in advance for share in income of joint ventures, expenses paid in advance for joint ventures, etc.Credit this account for receipt of share in income from, liquidation of advances to, or transfers of shares from joint ventures.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Due from Joint Venture",
            typeOfAccount: "Asset",
            definition: "It represents the estimated portion of receivables from joint ventures that may not be collectible, typically due to financial difficulties or other factors.",
            normalBalance: "Credit"
        },
        {
            word: "Intra-Agency Receivables",
            typeOfAccount: "Asset",
            definition: "It represent amounts owed by one department or division within a government agency to another department or division for goods or services provided, typically recorded as assets on the balance sheet until payment is received.",
            normalBalance: "Debit"
        },
        {
            word: "Due from Other Funds",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize transfers from one fund to another fund maintained within the corporation as legally authorized.",
            normalBalance: "Debit"
        },
            {
        word: "Due from Special Accounts",
        typeOfAccount: "Asset",
        definition: "It represents amounts owed to a government agency from special accounts or funds for specific purposes, typically earmarked for particular projects, activities, or obligations.",
        normalBalance: "Debit"
    },
    {
        word: "Due from Local Economic Enterprise",
        typeOfAccount: "Asset",
        definition: "It represents amounts owed to a government agency from local businesses or enterprises for goods or services provided, typically recorded as assets on the balance sheet until payment is received.",
        normalBalance: "Debit"
    },
    {
        word: "Advances",
        typeOfAccount: "Asset",
        definition: "It represent amounts paid by a company to suppliers, employees, or others for goods or services that have not yet been received or provided, typically recorded as assets on the balance sheet until the goods are received or the services are rendered.",
        normalBalance: "Debit"
    },
    {
        word: "Advances for Operating Expenses",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the amount of advances granted to accountable officers for payment of operating expenses of operating/field units not maintaining complete set of books of accounts.",
        normalBalance: "Debit"
    },
    {
        word: "Advances for Payroll",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the amount granted to regular disbursing officer for payment of salaries, wages, honoraria, allowances and other personnel benefits.",
        normalBalance: "Debit"
    },
    {
        word: "Advances to Special Disbursing Officer",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the amount granted to government corporation’s accountable officers and employees for special purpose/time-bound undertakings to be liquidated within a specified period.",
        normalBalance: "Debit"
    },
    {
        word: "Advances for Officers and Employees",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize amount advanced to officers and employees for official travel.",
        normalBalance: "Debit"
    },
    {
        word: "Other Receivables",
        typeOfAccount: "Asset",
        definition: "It represent amounts owed to a company that are not classified as accounts receivable, such as loans to employees, advances to suppliers, deposits, or other miscellaneous receivables.",
        normalBalance: "Debit"
    },
    {
        word: "Receivables - Disallowances/Charges",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the amount of disallowances/charges in audit due from public/private individuals/entities which have become final and executory.",
        normalBalance: "Debit"
    },
    {
        word: "Allowance for Impairment - Receivables- Disallowances/Charges",
        typeOfAccount: "Asset",
        definition: "It represents the estimated portion of receivables that may not be collectible, specifically related to disallowed charges or expenses, typically due to disputes, errors, or other factors.",
        normalBalance: "Credit"
    },
    {
        word: "Due from Officers and Employees",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize amount of claims from entity's officers and employees for overpayment (not covered by ND), cash shortage, loss of assets and other bills issued by the entity and losses in excess of allowable variance between books and volumetric count of merchandise inventory.",
        normalBalance: "Debit"
    },
    {
        word: "Allowance for Impairment - Due from Officers and Employees",
        typeOfAccount: "Asset",
        definition: "It represents the estimated portion of receivables from company officers and employees that may not be collectible, typically due to financial difficulties or other factors.",
        normalBalance: "Credit"
    },
    {
        word: "Due from Non-Government Organizations/People's Organizations",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize amount of advances granted to Non-Government Organizations (NGOs)/People’s Organizations (POs) for implementation of specific projects.",
        normalBalance: "Debit"
    },
    {
        word: "Allowance for Impairment - Due from Non-Government Organizations/People's Organizations",
        typeOfAccount: "Asset",
        definition: "It represents the estimated portion of receivables from non-government organizations or people's organizations that may not be collectible, typically due to financial difficulties or other factors.",
        normalBalance: "Credit"
    },
    {
        word: "Other Receivables -",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize amount due from debtors and other entities not falling under any of the specific receivable account.",
        normalBalance: "Debit"
    },
    {
        word: "Allowance for Impairment - Other Receivables",
        typeOfAccount: "Asset",
        definition: "This account is credited to reduce the cost/amortized cost/fair value of other receivables due to impairment.",
        normalBalance: "Credit"
    },
    {
        word: "Inventories",
        typeOfAccount: "Asset",
        definition: "It represent assets held by a company for sale in the ordinary course of business, including raw materials, work in progress, and finished goods.",
        normalBalance: "Debit"
    },
    {
        word: "Inventory Held for Sale",
        typeOfAccount: "Asset",
        definition: "It represents finished goods held by a company for sale to customers, including merchandise inventory for retail businesses or manufactured goods ready for sale.",
        normalBalance: "Debit"
    },
    {
        word: "Merchandise Inventory",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of goods purchased/acquired/produced which are intended for sale in the ordinary course of business as well as share in the reclaimed land with proponents, land and other items that are intended for sale.",
        normalBalance: "Debit"
    },
    {
        word: "Inventory Held for Distribution",
        typeOfAccount: "Asset",
        definition: "It represents finished goods held by a company for sale to customers or distribution to retailers, wholesalers, or other intermediaries.",
        normalBalance: "Debit"
    },
    {
        word: "Food Supplies for Distribution",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of food for distribution to hospital/rehabilitation patients, jail inmates and the like.",
        normalBalance: "Debit"
    },
    {
        word: "Welfare Goods for Distribution",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of goods for distribution to people affected by calamities/disasters/ground conflicts such as canned goods, noodles, mosquito nets, blankets, mats, kitchen utensils, flashlights and other similar items.",
        normalBalance: "Debit"
    },
    {
        word: "Drugs and Medicines for Distribution",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of drugs and medicines purchased/received for distribution.",
        normalBalance: "Debit"
    },
    {
        word: "Medical, Dental and Laboratory Supplies for Distribution",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of medical, dental and laboratory supplies purchased/received for distribution.",
        normalBalance: "Debit"
    },
    {
        word: "Agricultural and Marine Supplies for Distribution",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of fertilizers, pesticides and other marine and agricultural supplies for distribution. This includes supplies for aquaculture researches, environment protection/preservations and the like.",
        normalBalance: "Debit"
    },
    {
        word: "Agricultural Produce for Distribution",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of agricultural produce for distribution. This includes livestock and poultry; crops and fruits; and other agricultural products, supplies for aquaculture researches, environment protection/preservation and the like.",
        normalBalance: "Debit"
    },
    {
        word: "Textbooks and Instructional Materials for Distribution",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of textbooks and instructional materials including flipcharts, video clips/slides, and the like, purchased/received for distribution.",
        normalBalance: "Debit"
    },
    {
        word: "Construction Materials for Distribution",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of construction materials for distribution.",
        normalBalance: "Debit"
    },
    {
        word: "Property and Equipment for Distribution",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of property and equipment purchased/received for distribution.",
        normalBalance: "Debit"
    },
    {
        word: "Other Supplies and Materials for Distribution",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of purchased/acquired inventories not falling under any of the specific inventory accounts held for distribution.",
        normalBalance: "Debit"
    },
    {
        word: "Inventory Held for Manufacturing",
        typeOfAccount: "Asset",
        definition: "It represents raw materials, work in progress, and finished goods held by a company for use in its manufacturing process.",
        normalBalance: "Debit"
    },
    {
        word: "Raw Materials Inventory",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of unprocessed materials that serve as component of produced goods.",
        normalBalance: "Debit"
    },
    {
        word: "Work-in-Process Inventory",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize cost of goods still in the process of being manufactured or fabricated to produce an end product.",
        normalBalance: "Debit"
    },
    {
        word: "Finished Goods Inventory",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize cost of completed/manufactured product available for sale or use.",
        normalBalance: "Debit"
    },
    {
        word: "Inventory Held for Consumption",
        typeOfAccount: "Asset",
        definition: "It represents goods held by a company for internal use in its operations, rather than for sale to customers.",
        normalBalance: "Debit"
    },
    {
        word: "Office Supplies Inventory",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost or value of purchased/acquired office supplies such as bond papers, inks, and small tangible items like staple wire removers, punchers, staplers and other similar items for government operations.",
        normalBalance: "Debit"
    },
    {
        word: "Accountable Forms, Plates and Stickers",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize cost of accountable forms, with or without money value, acquired for government operations.",
        normalBalance: "Debit"
    },
    {
        word: "Non-Accountable Forms Inventory",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of non-accountable forms such as pre-printed application forms, tax returns forms, accounting forms and the like.",
        normalBalance: "Debit"
    },
    {
        word: "Animal/Zoological Supplies Inventory",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of food, medicines, veterinary and other maintenance needs of animals for use/consumption of government parks, zoos, wildlife sanctuaries and botanical gardens.",
        normalBalance: "Debit"
    },
    {
        word: "Food Supplies Inventory",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize cost of food for hospital/rehabilitation patients and the like.",
        normalBalance: "Debit"
    },
    {
        word: "Drugs and Medicines Inventory",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of drugs and medicines purchased/received for government operations.",
        normalBalance: "Debit"
    },
    {
        word: "Medical, Dental and Laboratory Supplies Inventory",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of medical, dental and laboratory supplies purchased/received for government operations.",
        normalBalance: "Debit"
    },
    {
        word: "Fuel, Oil and Lubricants Inventory",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of fuel and oil in government depots, lubricants and other oil products for use in government vehicles and other equipment in connection with government operations/projects.",
        normalBalance: "Debit"
    },
    {
        word: "Agricultural and Marine Supplies Inventory",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of fertilizers, pesticides and other marine and agricultural supplies for use in government operations.",
        normalBalance: "Debit"
    },
    {
        word: "Textbooks and Instructional Materials Inventory",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of textbooks and instructional materials including flipcharts, video clips/slides, and the like, purchased/received for use in government schools operation.",
        normalBalance: "Debit"
    },
    {
        word: "Military, Police and Traffic Supplies Inventory",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of military, police and traffic supplies acquired for government operations",
        normalBalance: "Debit"
    },
    {
        word: "Chemical and Filtering Supplies Inventory",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize cost of chemical, water treatment, filtering supplies and the like used in government operations.",
        normalBalance: "Debit"
    },
    {
        word: "Construction Materials Inventory",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of construction materials purchased/acquired for stock and later issuance for the construction, fabrication, repair and rehabilitation of government facilities undertaken by administration.",
        normalBalance: "Debit"
    },
    {
        word: "Other Supplies and Materials Inventory",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of purchased/acquired supplies and materials not falling under any of the specific inventory accounts held for consumption.",
        normalBalance: "Debit"
    },
    {
        word: "Prepayments and Deferred Charges",
        typeOfAccount: "Asset",
        definition: "It represent advance payments made by a company for goods or services that have not yet been received or expenses that will benefit future periods, typically recorded as assets on the balance sheet until the goods are received, the services are rendered, or the expenses are incurred.",
        normalBalance: "Debit"
    },
    {
        word: "Prepayments",
        typeOfAccount: "Asset",
        definition: "It represent advance payments made by a company for goods or services that have not yet been received, typically recorded as assets on the balance sheet until the goods are received or the services are rendered.",
        normalBalance: "Debit"
    },
    {
        word: "Advances to Contractors",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize amount advanced to contractors as authorized by law.",
        normalBalance: "Debit"
    },
    {
        word: "Prepaid Rent",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the amount advanced/deposited for leases/rentals of property, plant and equipment used in government operations.",
        normalBalance: "Debit"
    },
    {
        word: "Prepaid Registration",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the amount advanced for registration of government property.",
        normalBalance: "Debit"
    },
    {
        word: "Prepaid Interest",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the amount advanced for interest of loans contracted by the government.",
        normalBalance: "Debit"
    },
    {
        word: "Prepaid Insurance",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the amount advanced for the insurance of government property.",
        normalBalance: "Debit"
    },
    {
        word: "Other Prepayments",
        typeOfAccount: "Asset",
        definition: "Amount of other expenses which were paid for but remain unconsumed/ unutilized at the end of the accounting period.",
        normalBalance: "Debit"
    },
    {
        word: "Deferred Charges",
        typeOfAccount: "Asset",
        definition: "It represents a reduction in the amount owed by a customer or client for making early or upfront payments for goods or services, typically recorded as a liability until the goods are delivered or the services are rendered.",
        normalBalance: "Debit"
    },
    {
        word: "Discount on Advance Payments",
        typeOfAccount: "Asset",
        definition: "It represents real estate held by a company for the purpose of earning rental income, capital appreciation, or both, rather than for use in its own operations or for resale.",
        normalBalance: "Credit"
    },
    {
        word: "Investment Property",
        typeOfAccount: "Asset",
        definition: "It represent tangible assets used by a company in its operations, including land and the buildings erected on it, which are not intended for resale and are expected to be used over the long term.",
        normalBalance: "Debit"
    },
    {
        word: "Land and Buildings",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of land or part of a land held by the owner (or by the lessee under a finance lease) to earn rentals or for capital appreciation or both.",
        normalBalance: "Debit"
    },
    {
        word: "Investment Property, Land",
        typeOfAccount: "Asset",
        definition: "This account is credited for the loss in the future economic benefits or service potential of the investment property.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - Investment Property, Land",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the amount recognized to reduce land to its recoverable amount due to impairment.",
        normalBalance: "Debit"
    },
    {
        word: "Investment Property, Buildings",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost of building or part of a building held by the owner (or by the lessee under a finance lease) to earn rentals or for capital appreciation or both.",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - Investment Property, Buildings",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of building held as investment property in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - Investment Property, Buildings",
        typeOfAccount: "Asset",
        definition: "This account is credited forth loss in the future economic benefits or service potential of the investment property, over and above depreciation, which is equivalent to the excess of the carrying amount of the asset over its recoverable service amount.",
        normalBalance: "Credit"
    },
    {
        word: "Construction in Progress - Investment Property, Buildings",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the accumulated cost or other appropriate value of investment property-buildings which are still in the process of construction or development.",
        normalBalance: "Debit"
    },
    {
        word: "Property, Plant and Equipment",
        typeOfAccount: "Asset",
        definition: "It represent tangible assets used by a company in its operations, including land, buildings, machinery, vehicles, and other equipment, which are not intended for resale and are expected to be used over the long term.",
        normalBalance: "Debit"
    },
    {
        word: "Land",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase/reclamation or fair value if acquired through donation or transfers without cost of land.",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Impairment Losses - Land",
        typeOfAccount: "Asset",
        definition: "This account is credited for the amount recognized to reduce land to its recoverable amount due to impairment.",
        normalBalance: "Credit"
    },
    {
        word: "Land Improvements",
        typeOfAccount: "Asset",
        definition: "It represent enhancements made to land to make it more suitable for its intended use, including landscaping, paving, fencing, and other improvements that increase the land's utility and value.",
        normalBalance: "Debit"
    },
    {
        word: "Land Improvements, Aquaculture Structures",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase or fair value, if acquired through donation or transfers without cost, of fishery and marine structures.",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - Land Improvements, Aquaculture Structures",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of land improvements-aquaculture structures in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - Land Improvements, Aquaculture Structures",
        typeOfAccount: "Asset",
        definition: "This account is credited for the amount recognized to reduce land improvements, aquaculture structures to its recoverable amount.",
        normalBalance: "Credit"
    },
    {
        word: "Other Land Improvements",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase or fair value, if acquired through donation or transfers without cost, of land improvements.",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - Other Land Improvements",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of other land improvements in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - Other Land Improvements",
        typeOfAccount: "Asset",
        definition: "This account is credited for the amount recognized to reduce other land improvements to its recoverable amount.",
        normalBalance: "Credit"
    },
    {
        word: "Infrastructure Assets",
        typeOfAccount: "Asset",
        definition: "It represent long-lived, tangible assets used by a company in its operations, including roads, bridges, airports, and other public infrastructure projects, which are typically held for use in providing public services and are not intended for resale.",
        normalBalance: "Debit"
    },
    {
        word: "Road Networks",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of the roads, highways and bridges, and other road network facilities.",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - Road Networks",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of road networks in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - Road Networks",
        typeOfAccount: "Asset",
        definition: "This account is credited forth amount recognized to reduce road networks to its recoverable amount due to impairment.",
        normalBalance: "Credit"
    },
    {
        word: "Flood Control Systems",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of the seawalls, river walls and other flood control system facilities for public user for income generating purposes.",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - Flood Control Systems",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of flood control systems in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - Flood Control Systems",
        typeOfAccount: "Asset",
        definition: "This account is credited for the amount recognized to reduce flood control systems to its recoverable amount due to impairment.",
        normalBalance: "Credit"
    },
    {
        word: "Sewer Systems",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of the waste treatment plants and other sewer system facilities for public user for income generating purposes.",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - Sewer Systems",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of sewer systems in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - Sewer Systems",
        typeOfAccount: "Asset",
        definition: "This account is credited forth amount recognized to reduce sewer systems to its recoverable amount due to impairment.",
        normalBalance: "Credit"
    },
    {
        word: "Water Supply Systems",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of water source facility",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - Water Supply Systems",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of water supply systems in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - Water Supply Systems",
        typeOfAccount: "Asset",
        definition: "This account is credited for the amount recognized to reduce water supply systems to its recoverable amount due to impairment.",
        normalBalance: "Credit"
    },
    {
        word: "Power Supply Systems",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of installations for generation and distribution of electricity",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - Power Supply Systems",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of power supply systems in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - Power Supply Systems",
        typeOfAccount: "Asset",
        definition: "This account is credited for the amount recognized to reduce power supply systems to its recoverable amount due to impairment.",
        normalBalance: "Credit"
    },
    {
        word: "Communication Networks",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of communication networks",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - Communication Networks",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of communication networks in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - Communication Networks",
        typeOfAccount: "Asset",
        definition: "This account is credited for the amount recognized to reduce communication networks to its recoverable amount due to impairment.",
        normalBalance: "Credit"
    },
    {
        word: "Seaport Systems",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of ports, lighthouses, harbors and other seaport facilities, for public use or for income generating purposes.",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - Seaport Systems",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of seaport systems in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - Seaport Systems",
        typeOfAccount: "Asset",
        definition: "This account is credited for the amount recognized to reduce sea transport systems to its recoverable amount due to impairment.",
        normalBalance: "Credit"
    },
    {
        word: "Airport Systems",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of landing and taking-off area for aircraft, passengers’ arrival and departure areas, facilities for aircraft maintenance, and other airport facilities",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - Airport Systems",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of airport systems in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - Airport Systems",
        typeOfAccount: "Asset",
        definition: "This account is credited for the amount recognized to reduce airport systems to its recoverable amount due to impairment.",
        normalBalance: "Credit"
    },
    {
        word: "Parks, Plazas and Monuments",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the construction or fair value, if acquired through donation or transfers without cost, of parks, plazas and monuments, not classified as Heritage Assets, for recreation and public use or for income generating purposes.",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - Parks, Plazas and Monuments",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of parks, plazas and monuments in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - Parks, Plazas and Monuments",
        typeOfAccount: "Asset",
        definition: "This account is credited for the amount recognized to reduce parks, plazas and monuments to its recoverable amount due to impairment.",
        normalBalance: "Credit"
    },
    {
        word: "Other Infrastructure Assets",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of other public infrastructures which cannot be classified under any specific type of public infrastructures for public use or for income generating purposes.",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - Other Infrastructure Assets",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of other infrastructure assets in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - Other Infrastructure Assets",
        typeOfAccount: "Asset",
        definition: "This account is credited for the amount recognized to reduce other infrastructure assets to its recoverable amount due to impairment.",
        normalBalance: "Credit"
    },
    {
        word: "Buildings and Other Structures",
        typeOfAccount: "Asset",
        definition: "It represent tangible assets used by a company in its operations, including buildings, warehouses, factories, and other structures, which are not intended for resale and are expected to be used over the long term.",
        normalBalance: "Debit"
    },
    {
        word: "Buildings",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of buildings",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - Buildings",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of buildings in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - Buildings",
        typeOfAccount: "Asset",
        definition: "This account is credited for the amount recognized to reduce buildings to its recoverable amount due to impairment.",
        normalBalance: "Credit"
    },
    {
        word: "School Buildings",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of school buildings for the implementation of government’s education/learning programs.",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - School Buildings",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of school buildings in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - School Buildings",
        typeOfAccount: "Asset",
        definition: "This account is credited for the amount recognized to reduce school buildings to its recoverable amount due to impairment.",
        normalBalance: "Credit"
    },
    {
        word: "Hospitals and Health Centers",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of hospitals and health centers, for use in the delivery of public health services.",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - Hospitals and Health Centers",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of hospitals and health centers in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - Hospitals and Health Centers",
        typeOfAccount: "Asset",
        definition: "This account is credited for the amount recognized to reduce hospitals and health centers to its recoverable amount due to impairment.",
        normalBalance: "Credit"
    },
    {
        word: "Markets",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of markets for income generation.",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - Markets",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of markets in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses - Markets",
        typeOfAccount: "Asset",
        definition: "This account is credited for the amount recognized to reduce markets to its recoverable amount due to impairment.",
        normalBalance: "Credit"
    },
    {
        word: "Slaughterhouses",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of facilities where farm animals are butchered and processed.",
        normalBalance: "Debit"
    },
    {
        word: "Accumulated Depreciation - Slaughterhouses",
        typeOfAccount: "Asset",
        definition: "This account is credited for the allocation of cost of slaughterhouses in accordance with the prescribed policy on depreciation.",
        normalBalance: "Credit"
    },
    {
        word: "Accumulated Impairment Losses- Slaughterhouses",
        typeOfAccount: "Asset",
        definition: "This account is credited for the amount recognized to reduce slaughterhouses to its recoverable amount due to impairment.",
        normalBalance: "Credit"
    },
    {
        word: "Hostels and Dormitories",
        typeOfAccount: "Asset",
        definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of hostels and dormitories for commercial and/or income generating purposes.",
        normalBalance: "Debit"
    },
    {
        word: "Payables",
        typeOfAccount: "Liabilities",
        definition: "It represent amounts owed by a company to its creditors for goods or services received but not yet paid for, including accounts payable, accrued expenses, and other liabilities.",
        normalBalance: "Credit"
    },
    {
        word: "Accounts Payable",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize receipt/purchase/procurement/acquisition of goods or services on account in the normal course of trade and business operation.",
        normalBalance: "Credit"
    },
    {
        word: "Due to Officers and Employees",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize incurrence of liability to officers and employees for salaries, benefits and other emoluments including authorized expenses paid in advance by the officers and employees.",
        normalBalance: "Credit"
    },
    {
        word: "Notes Payable",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize issuance of promissory notes/trade acceptance and other negotiable instruments.",
        normalBalance: "Credit"
    },
    {
        word: "Interest Payable",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize accrual of interest on loans/bonds or other indebtedness, whether short-term or long-term.",
        normalBalance: "Credit"
    },
    {
        word: "Operating Lease Payable",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize incurrence of a liability arising from operating lease contract.",
        normalBalance: "Credit"
    },
    {
        word: "Finance Lease Payable",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize incurrence of liability arising from finance lease contract.",
        normalBalance: "Credit"
    },
    {
        word: "Awards and Rewards Payable",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize granting of awards in recognition of any civic or professional achievement and of rewards to informers for the receipt of reliable information leading to successful arrest/capture of fugitives, seizure/confiscation of smuggled goods, or collection/recovery of unpaid taxes/surcharges/fines/penalties.",
        normalBalance: "Credit"
    },
    {
        word: "Service Concession Arrangement Payable",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize the liability arising from unconditional obligation of the grantor entity to make series of payments to the operator upon recognition of service concession assets, excluding finance charge and service components of the payments.",
        normalBalance: "Credit"
    },
    {
        word: "Pension Benefits Payable",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize accrual of pension of government personnel.",
        normalBalance: "Credit"
    },
    {
        word: "Leave Benefits Payable",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize accrual of money value of the earned leave credits of government personnel.",
        normalBalance: "Credit"
    },
    {
        word: "Retirement Gratuity Payable",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize liability for retirement gratuity benefits due to government personnel.",
        normalBalance: "Credit"
    },
    {
        word: "Bills/Bonds/Loans Payable",
        typeOfAccount: "Liabilities",
        definition: "It represent the amounts owed by a company to creditors for borrowings, including short-term bills, long-term bonds, and various types of loans.",
        normalBalance: "Credit"
    },
    {
        word: "Bonds Payable - Domestic",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize issuances/flotations of peso-denominated bonds.",
        normalBalance: "Credit"
    },
    {
        word: "Discount on Bonds Payable - Domestic",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize discounts on issuance of peso-denominated bonds.",
        normalBalance: "Credit"
    },
    {
        word: "Premium on Bonds Payable - Domestic",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize premiums on issuance of peso-denominated bonds.",
        normalBalance: "Credit"
    },
    {
        word: "Loans Payable - Domestic",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize receipt of loan proceeds (cash or non-cash) from local creditors.",
        normalBalance: "Credit"
    },
    {
        word: "Loans Payable - Foreign",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize receipt of loan proceeds (cash or non-cash) from foreign governments or international financial institutions.",
        normalBalance: "Credit"
    },
    {
        word: "Due to BIR",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize taxes withheld from officers/employees and other entities other than Value Added Tax Payable and Income Tax Payable.",
        normalBalance: "Credit"
    },
    {
        word: "Due to GSIS",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize the withholding of employees’ premium payments and other payables for remittance to the Government Service Insurance System (GSIS).",
        normalBalance: "Credit"
    },
    {
        word: "Due to Pag-IBIG",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize the withholding of employees’ premium payments and other payables for remittance to the Home Development Mutual Fund (HDMF).",
        normalBalance: "Credit"
    },
    {
        word: "Due to PhilHealth",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize the withholding of employees’ premium payments for remittance to the Philippine Health Insurance Corporation (PHIC).",
        normalBalance: "Credit"
    },
    {
        word: "Due to NGAs",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize receipt of funds from National Government Agencies for the implementation of specific programs or projects and other inter-agency transactions subject to liquidation.",
        normalBalance: "Credit"
    },
    {
        word: "Due to GOCCs",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize the receipt of funds from government corporations for delivery of goods/services as authorized by law; fund transfers from the government corporations for the implementation of specific programs or projects; NG-managed fund; escrow accounts; collateral deposits for the account of government corporations and SSS; and other inter-agency transactions, except those pertaining to GSIS, Pag-IBIG, PhilHealth and SSS.",
        normalBalance: "Credit"
    },
    {
        word: "Due to LGUs",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize the receipt of funds from LGUs for delivery of goods/services as authorized by law, fund transfers for the implementation of specific programs or projects and other inter-agency transactions.",
        normalBalance: "Credit"
    },
    {
        word: "Due to Joint Venture",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize the amounts payable to subsidiaries/joint ventures/associates/affiliates.",
        normalBalance: "Credit"
    },
    {
        word: "Intra-Agency Payables",
        typeOfAccount: "Liabilities",
        definition: "It represent amounts owed by one department or division within an organization to another department or division for goods or services provided.",
        normalBalance: "Credit"
    },
    {
        word: "Due to Other Funds",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize the authorized receipt of funds from one fund to another fund maintained by the same government corporation.",
        normalBalance: "Credit"
    },
    {
        word: "Due to Special Accounts",
        typeOfAccount: "Liabilities",
        definition: "It represents amounts owed by a company to special accounts or funds for specific purposes, typically earmarked for particular projects, activities, or obligations.",
        normalBalance: "Credit"
    },
    {
        word: "Due to Local Economic Enterprises",
        typeOfAccount: "Liabilities",
        definition: "It represents amounts owed by a company to local businesses or enterprises for goods or services received but not yet paid for.",
        normalBalance: "Credit"
    },
    {
        word: "Trust Liabilities",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize the receipt of amount held in trust for specific purpose.",
        normalBalance: "Credit"
    },
    {
        word: "Trust Liabilities - Disaster Risk Reduction and Management Fund",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize the receipt of amount held in trust for Disaster Risk Reduction and Management.",
        normalBalance: "Credit"
    },
    {
        word: "Bail Bonds Payable",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize the incurrence of liability arising from the receipt of cash bond from a person who is in the custody of the law to guaranty his appearance in court at the appointed day and time or the compliance with the conditions of the bond.",
        normalBalance: "Credit"
    },
    {
        word: "Guaranty/Security Deposits Payable",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize the incurrence of liability arising from the receipt of cash or cash equivalents to guaranty: (a) that the winning bidder shall enter into contract with the procuring entity; and (b) performance by the contractor of the terms of the contract.",
        normalBalance: "Credit"
    },
    {
        word: "Customers' Deposits Payable",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize the receipt of cash deposits from customers for goods/services to be delivered and property to be leased.",
        normalBalance: "Credit"
    },
    {
        word: "Deferred Credits/Unearned Income",
        typeOfAccount: "Liabilities",
        definition: "Deferred credits, also known as unearned income, represent income received by a company in advance for goods or services that have not yet been delivered or performed. These credits are recorded as liabilities until the goods are delivered or the services are rendered.",
        normalBalance: "Credit"
    },
    {
        word: "Deferred Credits",
        typeOfAccount: "Liabilities",
        definition: "It represent income received by a company in advance for goods or services that have not yet been delivered or performed. These credits are recorded as liabilities until the goods are delivered or the services are rendered.",
        normalBalance: "Credit"
    },
    {
        word: "Deferred Real Property Tax",
        typeOfAccount: "Liabilities",
        definition: "It refers to the portion of real property tax revenue that has been collected but not yet recognized as income in the current accounting period, typically because it pertains to future periods.",
        normalBalance: "Credit"
    },
    {
        word: "Deferred Special Education Tax",
        typeOfAccount: "Liabilities",
        definition: "It represents the portion of special education tax revenue that has been collected but not yet recognized as income in the current accounting period, typically because it pertains to future periods.",
        normalBalance: "Credit"
    },
    {
        word: "Deferred Finance Lease Revenue",
        typeOfAccount: "Liabilities",
        definition: "This account is used to set up in the books of the lessor the unearned income from finance lease which corresponds to the difference between the total finance lease receivable and the derecognized asset under a finance lease.",
        normalBalance: "Credit"
    },
    {
        word: "Deferred Service Concession Revenue",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize the unearned service concession revenue arising from the grant to operator the right to earn revenue from third party users of the service concession asset or another revenue generating asset.",
        normalBalance: "Credit"
    },
    {
        word: "Unearned Revenue - Investment Property",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize the receipt of advance rent/lease income from investment property.",
        normalBalance: "Credit"
    },
    {
        word: "Other Deferred Credits",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize other transactions not falling under any of the specific deferred credits accounts.",
        normalBalance: "Credit"
    },
    {
        word: "Provisions",
        typeOfAccount: "Liabilities",
        definition: "These are liabilities of uncertain timing or amount, which are recognized in the financial statements when there is a present obligation as a result of past events, and it is probable that a transfer of economic benefits will be required to settle the obligation, and a reliable estimate of the amount can be made.",
        normalBalance: "Credit"
    },
    {
        word: "Termination Benefits",
        typeOfAccount: "Liabilities",
        definition: "It represent income received in advance for goods or services not yet provided, recorded as liabilities until delivery or completion.",
        normalBalance: "Credit"
    },
    {
        word: "Other Provisions",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize liabilities of uncertain timing or amount. This includes provisions for litigation and other legal claims, warranty provisions, decommissioning provisions, or environmental provisions, among others.",
        normalBalance: "Credit"
    },
    {
        word: "Other Payables",
        typeOfAccount: "Liabilities",
        definition: "This account is used to recognize other liabilities not falling under any of the specific payable accounts.",
        normalBalance: "Credit"
    },
    {
        word: "Government Equity",
        typeOfAccount: "Equity",
        definition: "It represents the ownership interest of the government in public corporations or entities, typically expressed as the government's share of the equity or ownership of these entities.",
        normalBalance: "Credit"
    },
    {
        word: "Prior Period Adjustment",
        typeOfAccount: "Equity",
        definition: "It is an accounting correction made to the financial statements of a prior reporting period to rectify an error that occurred in that period. It involves adjusting the beginning balances of assets, liabilities, equity, revenues, or expenses to accurately reflect the correction.",
        normalBalance: "Credit (Debit)"
    },
    {
        word: "Intermediate Accounts",
        typeOfAccount: "Equity",
        definition: "These are ledger accounts used to record transactions temporarily before they are transferred to the appropriate permanent accounts in the general ledger. These accounts are used to facilitate the recording and classification of transactions during the accounting period.",
        normalBalance: "Credit (Debit)"
    },
    {
        word: "Income and Expense Summary",
        typeOfAccount: "Equity",
        definition: "It provides a concise overview of a company's financial performance, summarizing its total income and expenses over a specific period, typically presented in a statement format.",
        normalBalance: "Credit (Debit)"
    },
    {
        word: "Equity in Joint Venture",
        typeOfAccount: "Equity",
        definition: "It represents a company's share of ownership in a jointly controlled entity, where the company has significant influence but does not have control over the financial and operating policies of the joint venture.",
        normalBalance: "Credit (Debit)"
    },
    {
        word: "Unrealized Gain/(Loss)",
        typeOfAccount: "Equity",
        definition: "It represents the increase or decrease in the value of an asset that has not yet been sold or realized, reflecting changes in its market value.",
        normalBalance: "Credit"
    },
    {
        word: "Unrealized Gain/(Loss) from Changes in the Fair Value of Financial Assets",
        typeOfAccount: "Equity",
        definition: "It represents the increase or decrease in the value of financial assets, such as stocks, bonds, and derivatives, that have not yet been sold or realized, reflecting changes in their market value.",
        normalBalance: "Credit"
    },
    {
        word: "Tax Revenue",
        typeOfAccount: "Income",
        definition: "It refers to income generated by a government through various taxes imposed on individuals, businesses, and other entities, including income taxes, sales taxes, property taxes, and other forms of taxation.",
        normalBalance: "Credit"
    }

    ];


    const searchInput = document.getElementById("inp-word");
    const searchButton = document.getElementById("search-btn");
    const resultDiv = document.getElementById("result");

    // Function to perform search
    function search() {
        const searchTerm = searchInput.value.toLowerCase();
        
        // Clear previous results
        resultDiv.innerHTML = "";

        // If search term is empty, do not display any results
        if (searchTerm.trim() === "") return;

        // Filter terms based on search input
        const filteredTerms = terms.filter(term => term.word.toLowerCase().includes(searchTerm));

        // Display search results
        filteredTerms.forEach(term => {
            const termDiv = document.createElement("div");
            termDiv.classList.add("result-item");
            termDiv.innerHTML = `
                <div class="word">
                    <h3>${term.word}</h3>
                </div>
                <div class="type-of-account">
                    <p>Type of Account: ${term.typeOfAccount}</p>
                </div>
                <div class="definition">
                    <p>${term.definition}</p>
                </div>
                <div class="normal-balance">
                    <p>Normal Balance: ${term.normalBalance}</p>
                </div>
            `;
            resultDiv.appendChild(termDiv);
        });

        // Scroll to the top of the search results
        window.scrollTo({ top: resultDiv.offsetTop, behavior: 'smooth' });
    }

    // Event listener for search button click
    searchButton.addEventListener("click", search);

    // Event listener for input change
    searchInput.addEventListener("input", search);
});