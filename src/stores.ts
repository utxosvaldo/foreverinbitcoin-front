import { writable } from 'svelte/store'
// import { PriorityFees, FeeRateEstimate } from './interfaces/priorityFees'
// Base vars
export const text = writable<string>("")

// text_preview: str = ""
// is_invalid_text: bool = False

//     # image
// is_upload_image_clicked: bool = False

export const fileName = writable<string>("")
// filename: str = ""
// is_invalid_file_size: bool = False
// receive_address: str = ""
// receive_address_type: str = ""
// is_receive_address_set: bool = False
// is_invalid_address: bool = False

// priority_fees: dict = PriorityFeeEstimates().dict()

const defaultLowFeeRateEstimate: FeeRateEstimate = {
    feeRate: 3,
    networkFee: 30000,
    serviceFee: 25000,
    totalAmount: 55000
}
const defaultMediumFeeRateEstimate: FeeRateEstimate = {
    feeRate: 5,
    networkFee: 50000,
    serviceFee: 25000,
    totalAmount: 75000
}
const defaultHighFeeRateEstimate: FeeRateEstimate = {
    feeRate: 10,
    networkFee: 100000,
    serviceFee: 25000,
    totalAmount: 125000
}

const defaultPriorityFees: PriorityFees = {
    low: defaultLowFeeRateEstimate,
    medium: defaultMediumFeeRateEstimate,
    high: defaultHighFeeRateEstimate

}

export const priorityFees = writable<PriorityFees>(defaultPriorityFees)
export const feePriority = writable<String>("high")
// fee_priority: str = "High"

//     # From confirmation
// order: str = ""
// order_status: int = 0
// order_type: str = "image"
// invoice_id: str = ""
// checkout_link: str = ""

//     # Order creation and processing
// order_processing: bool = False
// order_confirmed: bool = False
// order_loading: bool = True

//     # Inscription
// inscription: str = ""
// inscription_sent_tx: str = ""

//     # Show
// address_done_button: bool = False

// host: str = os.getenv("HOST", "http://localhost")



type Notification = string

export const notifications = writable<Notification[]>([])

export function toast(message: string) {
    notifications.update((state) => [message, ...state])
    setTimeout(removeToast, 2000)
}

function removeToast() {
    notifications.update((state) => {
        return [...state.slice(0, state.length - 1)]
    })
}
