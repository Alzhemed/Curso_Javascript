//Middleware pattern (chain of responsability)
const passo1 = (ctx, next) => {
    ctx.valor1 = "mid1";
    next();
}

const passo2 = (ctx, next) => {
    ctx.valor2 = "mid2";
    next();
}

const passo3 = ctx => ctx.valor3 = "mid3";

const exec = (ctx, ...middlewares) => {

    const execMiddleware = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execMiddleware(indice + 1));
    }

    execMiddleware(0)
}

ctx = {};

exec(ctx, passo1, passo2, passo3);

console.log(ctx);