/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_NAME: string
    readonly VITE_API_KEY: string
    readonly VITE_BASE_URL: string
    readonly VITE_JWT_KEY: string
    readonly VITE_MAX_TIME_FETCH: string
    readonly VITE_MODE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
