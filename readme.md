## Intro

Nobejs (or just Nobe) is a framework to help developers keep the focus and code near to businesses domain and features. And it does by bringing a concept of "Nobe Story" - which essentially is a philosophy on how to destructure a business requirement and execute it to expose the functionality via APIs, Command or more.

To learn more about the mindset behind it, please continue to: [Why Nobe](/why-nobe)

## Installation

Nobejs is Open Source under MIT License and lives at [Github](https://github.com/nobejs/nobejs)

You can currently run Nobe following:

1. Nobe Releases are at https://github.com/nobejs/nobejs/releases
2. Pick and Download the latest version and click on "Source code" file
3. Extract the zip file
4. Change into the directory of Nobe you just extracted
5. Run `yarn install` (You can use npm too)

## Documentation

Visit [NobeJs Website](https://nobejs.org)

gh release create v1.1.2-alpha.8 --notes "v1.1.2-alpha.8" -p

SELECT service, url, timestamp, http_method, status_code, source, meta::jsonb->>'team_uuid' as team_uuid, created_at FROM logs;
SELECT service, meta::jsonb->>'team_uuid' as team_uuid FROM logs WHERE meta::jsonb->>'team_uuid' = '6dbd2c45-04b7-43b8-8689-5cd60cdb193e';
SELECT service, meta::jsonb->>'team_uuid' as team_uuid FROM logs WHERE meta::jsonb->>'team_uuid' = 'cb9fbbe1-2099-4ece-badc-9e21c3d98ec8';
SELECT service, url, timestamp, http_method, status_code, source, meta::jsonb->>'team_uuid' as team_uuid, created_at FROM logs WHERE meta::jsonb->>'team_uuid' = 'cb9fbbe1-2099-4ece-badc-9e21c3d98ec8';
