## Snowplow Debugger

### Understanding Snowplow in Intelligent Services data collection

Intelligent Services data collection uses a third party platform (Snowplow) to validate data received is in the correct schema/format. If you're sending data but aren't seeing corresponding changes to your dashboards and recommendations, it's very likely the data you're sending is failing schema validation.

![event flow](/examples/event_flow.png)

The [Snowplow Debugger browser extension](https://chromewebstore.google.com/detail/snowplow-inspector/maplkdomeamdlngconidoefjpogkmljm?pli=1) is a helpful tool to validate/fix schemas during event instrumentation.

### Troubleshooting and overriding schemas

Occassionaly a schema in the debugger will show up as `Unrecognized`. That is due to data collection schemas being out of sync with what's in the Snowplow registry. To work around this issue you override the schemas in your browser.

Instructions on overriding schema:

1. Find the name of the unrecognized schema and the corresponding json file in this directory (for example, in the screenshot below, to add a recognized schema, got to [storefront-instance.json](./storefront-instance.json))

2. In the top left corner of your debugger, click on `Manage Schemas`

![unrecognized schema storefront instance](/examples/unrecognized_schema_storefront_instance.png)

3. Select `Local Registry` -> `Schemas`

![edit schemas in local registry](/examples/edit_schema_local_registry.png)

4. Select `New Schema` and copy/paste the json file with the right schema

![add new schema in local registry](/examples/new_schema_local_registry.png)

5. Due to debugger weirdness, you have to save schema, then select `Back to Debugger`, then select `Manage Schemas` again to view your newly added schema

![list of schemas in local registry](/examples/schema_list_local_registry.png)

6. Your schema in the debugger view should now be showing as `Valid` (or `Invalid` on 😭 days)

![valid schema storefront instance](/examples/valid_schema_storefront_instance.png)

### Additional resources

More information and detailed list of schema override steps under [Snowplow Inspector Adding Schemas](https://docs.snowplow.io/docs/testing-debugging/snowplow-inspector/adding-schemas/)
