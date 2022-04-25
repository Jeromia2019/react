import { nanoid } from 'nanoid';

const { createAction } = require('@reduxjs/toolkit');

// Plus besoin de déclarer la constante vu qu'on peut la récupérer avec le .type
// const RECAP_ACTION = 'recap/action'

// const recapAction = createAction(RECAP_ACTION)
const recapAction = createAction('recap/action', (step = 1) => ({
    // payload: step
    payload: {
        'id': nanoid(),
        'step': step
    }
}))

console.log(recapAction.type);