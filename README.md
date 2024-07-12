# Realworld Weather for Rebar Framework

Retrieves the weather at the specified coordinates via the Open Meteo API and synchronizes it with all players who have a `character` document.

# Features

- Current market information (price, volume, dayhigh, price etc.)
- Historical daily market information (high, low, volume, changePercent etc.)
- Setting which commodities are retrieved
- Set polling interval
- Set whether only current or also historical data should be retrieved

# API
```ts
import { useRebar } from '@Server/index.js';

const Rebar = useRebar();
const commoditieAPI = await Rebar.useApi().getAsync("realworld-commoditiesprice-api");

await getCommoditiesList() //List of commodities enabled in config.ts
await getCurrent(name: string) //Current market information of a specific commodity (price, volume, dayhigh, price etc.)
await getCurrentPrice(name: string) //Current price of a specific commodity
await getHistorical(name: string) //Historical daily market information of a specific commodity(high, low, volume, changePercent etc.)
```


# Installation

1. Create the folder `realworld-commoditiesprice` in the `Rebar` Framework directory under plugins
2. Download the folder `server` from this repository and copy it into the folder `realworld-commoditiesprice`

