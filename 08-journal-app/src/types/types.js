
// Estamos usando como convención: "[nombre_del_redcer] nombre_de_accion"

export const types = {

    login: '[Auth] Login',
    logout: '[Auth] Logout',

    uiSetRegisterError: '[UI] Set Register Error',
    uiRemoveRegisterError: '[UI] Remove Register Error',

    uiSetLoginError: '[UI] Set Login Error',
    uiRemoveLoginError: '[UI] Remove Login Error',

    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',

    
    notesAddNew: '[notes] New note',
    notesActive: '[notes] Set active note',
    notesLoad: '[notes] Load notes',
    notesUpdated: '[notes] Updated note',
    notesFileUrl: '[notes] Updated image url',
    notesDelete: '[notes] Delete note',
    notesLogoutCleaning: '[notes] Logout Cleaning'
}