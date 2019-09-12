Reproduction:

```bash
$ webpack
/Users/jgrimes/Desktop/test/node_modules/webpack/lib/Compilation.js:1994
				throw new Error(
				^

Error: Conflict: Multiple assets emit to the same filename resources/images/52567e3de164027553fb0a82ea1ba37a.png
    at Compilation.emitAsset (/Users/jgrimes/Desktop/test/node_modules/webpack/lib/Compilation.js:1994:11)
    at Compilation.createModuleAssets (/Users/jgrimes/Desktop/test/node_modules/webpack/lib/Compilation.js:2075:11)
    at /Users/jgrimes/Desktop/test/node_modules/webpack/lib/Compilation.js:1375:9
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/jgrimes/Desktop/test/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (/Users/jgrimes/Desktop/test/node_modules/tapable/lib/Hook.js:154:20)
    at Compilation.seal (/Users/jgrimes/Desktop/test/node_modules/webpack/lib/Compilation.js:1323:27)
    at /Users/jgrimes/Desktop/test/node_modules/webpack/lib/Compiler.js:675:18
    at /Users/jgrimes/Desktop/test/node_modules/webpack/lib/Compilation.js:1242:4
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/jgrimes/Desktop/test/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:24:1)
    at AsyncSeriesHook.lazyCompileHook (/Users/jgrimes/Desktop/test/node_modules/tapable/lib/Hook.js:154:20)
    at Compilation.finish (/Users/jgrimes/Desktop/test/node_modules/webpack/lib/Compilation.js:1234:28)
    at /Users/jgrimes/Desktop/test/node_modules/webpack/lib/Compiler.js:672:17
    at eval (eval at create (/Users/jgrimes/Desktop/test/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:11:1)
    at /Users/jgrimes/Desktop/test/node_modules/webpack/lib/Compilation.js:1166:12
    at /Users/jgrimes/Desktop/test/node_modules/webpack/lib/Compilation.js:1078:9
    at processTicksAndRejections (internal/process/task_queues.js:75:11)
```