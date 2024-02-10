const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecCreamAction = require('./features/icecream/icecreamSlice').icecCreamAction




//we want to dispatch actions from index.js

store.dispatch(cakeActions.order())
store.dispatch(cakeActions.order())
store.dispatch(cakeActions.stocked(2))
store.dispatch(icecCreamAction.ordered())
store.dispatch(icecCreamAction.stocked())


store.dispatch()

const unsubscribe = store.subscribe(()=>{
    console.log('Updated state',store.getState())
})

unsubscribe()


