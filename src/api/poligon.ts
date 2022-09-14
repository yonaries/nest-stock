import { restClient } from "@polygon.io/client-js";

const rest = restClient("RYcFl36WdyCnhziv169DfjkthjxcOAgW");

const stock = rest.stocks
    .aggregatesGroupedDaily('2020-10-14')
    .then(result => console.log(result))
    .catch(err => console.log(err))