import {JSX, SVGProps} from "react"


export const BugIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor"
              d="M17.416 2.624a.75.75 0 1 0-.832-1.248L13.669 3.32A4.5 4.5 0 0 0 12 3c-.59 0-1.153.113-1.669.32L7.416 1.376a.75.75 0 0 0-.832 1.248l2.36 1.573a4.5 4.5 0 0 0-1.368 2.475A5.5 5.5 0 0 1 8.938 6.5h6.125q.707.002 1.361.172a4.5 4.5 0 0 0-1.368-2.475zM1.25 14a.75.75 0 0 1 .75-.75h3v-1.312c0-.836.26-1.611.704-2.248l-2.483-.994a.75.75 0 0 1 .558-1.392l3.136 1.254A3.9 3.9 0 0 1 8.938 8h6.124c.74 0 1.432.204 2.023.558l3.136-1.254a.75.75 0 1 1 .558 1.392l-2.483.994A3.9 3.9 0 0 1 19 11.938v1.312h3a.75.75 0 0 1 0 1.5h-3V15a7 7 0 0 1-.808 3.269l2.587 1.035a.75.75 0 0 1-.558 1.393l-2.892-1.158a7 7 0 0 1-4.579 2.421V15a.75.75 0 1 0-1.5 0v6.96a7 7 0 0 1-4.579-2.42L3.78 20.696a.75.75 0 1 1-.558-1.393l2.588-1.035A7 7 0 0 1 5 15v-.25H2a.75.75 0 0 1-.75-.75"/>
    </svg>)
}

export const ExclamationIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             className="size-6" {...props}>
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/>
        </svg>
    )
}
export const XCircleIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             className="size-6" {...props}>
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
    )
}

export const MoonIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             className="size-6" {...props}>
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>
        </svg>
    )
}

export const SunIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             className="size-6" {...props}>
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
        </svg>
    )
}
