import { writable } from 'svelte/store'

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
