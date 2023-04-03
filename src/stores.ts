import { writable } from 'svelte/store'
import type { FeeRateEstimate, PriorityFees } from './interfaces/priorityFees'

export const text = writable<string>("")
export const fileName = writable<string>("")
export const previewFileName = writable<string>("")
export const receiveAddress = writable<string>("")
export const receiveAddressType = writable<string>("")
export const focusedAddressInput = writable<boolean>(false)
export const walletConnected = writable<boolean>(false)
// receive_address: str = ""
// receive_address_type: str = ""
// is_receive_address_set: bool = False
// is_invalid_address: bool = False


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
    high: defaultHighFeeRateEstimate,
    rateUSD: 30000
}

export const priorityFees = writable<PriorityFees>(defaultPriorityFees)
export const feePriority = writable<string>("high")
export const feeRate = writable<number>(0)

export const networkFee = writable<number>(1234)
export const serviceFee = writable<number>(567)
export const totalAmount = writable<number>(890)
// fee_priority: str = "High"

//     # From confirmation
// order: str = ""
// order_status: int = 0
// order_type: str = "image"
// invoice_id: str = ""
export const orderType = writable<string>("image")
export const orderId = writable<string>("")
export const checkoutLink = writable<string>("http://reddit.com")
export const orderStatus = writable<number>(0)
export const rateUSD = writable<number>(0)
// checkout_link: str = ""

//     # Order creation and processing
// order_processing: bool = False
// order_confirmed: bool = False
// order_loading: bool = True

//     # Inscription
export const inscriptionId = writable<string>("")
export const inscriptionSentTx = writable<string>("")




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
