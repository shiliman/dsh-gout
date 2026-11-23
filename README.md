# dsh-gout · 痛风

DSH 的一条「痛风」副线：开会话后按真实时长累积难受，到线会发作，发作时把对话语气拧到不对劲。
默认**不开**（`defaultEnabled: false`），要在这个会话里说得上这回事，用工具 `gout_relief` / `gout_worse` 或改配置。

## 它到底做什么

- 每个会话一份身体状态，存在 `$DSH_HOME/dsh-gout/sessions/<sid>.json`
- 每轮按配置算时长（默认 12 分钟一轮）攒「难受值」
- 到 `startAt`（默认 34）开始有可感知的注入；到 `flareAt`（默认 76）有 `flareChance` 的概率发作
- 注入只写**感受与说话要求**，不写解剖细节；平静时一个字都不注入
- 同一状态有冷却（默认 8 分钟），发作/刚处理完不受冷却限制

## 工具

| 工具 | 用途 |
|---|---|
| `gout_status` | 读当前会话状态 |
| `gout_relief` | 处理一下：吃药 / 把脚垫高 / 隔着毛巾冰敷 |
| `gout_worse` | 主动加重（默认一輪的量） |

## 配置要点

| 键 | 默认 | 说明 |
|---|---|---|
| `enabled` | true | 总闸 |
| `defaultEnabled` | false | 新会话默认开不开 |
| `eeriness` | 2 | 语气不对劲的上限 0–3 |
| `gain` | 0.38 | 每轮加重 |
| `flareChance` | 0.4 | 到线后每轮发作概率 |
| `startAt` / `flareAt` | 34 / 76 | 有感觉 / 快发作 |

## 卸载

从 profile 的 bundles 里移除 `dsh-gout`，再删 `$DSH_HOME/dsh-gout`。

> 只产出源码，本机未安装。
