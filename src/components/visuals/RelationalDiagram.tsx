interface SchemaField {
  name: string;
  keyType?: "PK" | "FK";
}

interface SchemaTable {
  name: string;
  fields: readonly SchemaField[];
  className: string;
}

const schemaTables: readonly SchemaTable[] = [
  {
    name: "customers",
    className: "schema-customers",
    fields: [{ name: "customer_id", keyType: "PK" }, { name: "country" }, { name: "segment" }],
  },
  {
    name: "orders",
    className: "schema-orders",
    fields: [
      { name: "order_id", keyType: "PK" },
      { name: "customer_id", keyType: "FK" },
      { name: "product_id", keyType: "FK" },
      { name: "amount" },
    ],
  },
  {
    name: "sessions",
    className: "schema-sessions",
    fields: [
      { name: "session_id", keyType: "PK" },
      { name: "customer_id", keyType: "FK" },
      { name: "duration" },
    ],
  },
  {
    name: "products",
    className: "schema-products",
    fields: [{ name: "product_id", keyType: "PK" }, { name: "category" }, { name: "price" }],
  },
];

const relationships = [
  "orders.customer_id → customers.customer_id",
  "orders.product_id → products.product_id",
  "sessions.customer_id → customers.customer_id",
] as const;

function SchemaCard({ table }: { table: SchemaTable }) {
  return (
    <article className={`schema-card ${table.className}`}>
      <header>
        <span className="schema-icon" aria-hidden="true" />
        <h3>{table.name}</h3>
      </header>
      <dl>
        {table.fields.map((field) => (
          <div className="schema-field" key={field.name}>
            <dt>{field.name}</dt>
            {field.keyType ? <dd>{field.keyType}</dd> : <dd aria-hidden="true">—</dd>}
          </div>
        ))}
      </dl>
    </article>
  );
}

export function RelationalDiagram() {
  return (
    <figure
      aria-labelledby="relational-diagram-title"
      className="relational-diagram"
      data-animation-state="static"
    >
      <div className="diagram-toolbar">
        <div>
          <span className="toolbar-dot" />
          <span className="toolbar-dot" />
          <span className="toolbar-dot" />
        </div>
        <span>relational_context.schema</span>
      </div>

      <div className="diagram-canvas">
        <h2 className="sr-only" id="relational-diagram-title">
          Relational data flowing into a learned representation
        </h2>

        <svg
          aria-hidden="true"
          className="relationship-connectors"
          preserveAspectRatio="none"
          viewBox="0 0 1000 520"
        >
          <path
            className="relationship-path path-customer-orders"
            d="M 300 136 C 360 136, 365 160, 430 160"
          />
          <path
            className="relationship-path path-product-orders"
            d="M 625 390 C 625 330, 625 255, 625 205"
          />
          <path
            className="relationship-path path-customer-sessions"
            d="M 185 218 C 185 270, 185 316, 185 355"
          />
          <path className="representation-path" d="M 730 250 C 775 250, 780 250, 820 250" />
        </svg>

        {schemaTables.map((table) => (
          <SchemaCard key={table.name} table={table} />
        ))}

        <div className="representation-block">
          <p>Learned representation</p>
          <div aria-hidden="true" className="representation-grid">
            {Array.from({ length: 18 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="representation-labels">
            <span>entity</span>
            <span>relation</span>
            <span>context</span>
          </div>
        </div>
      </div>

      <div className="relationship-ledger">
        <span className="ledger-label">FK links</span>
        {relationships.map((relationship) => (
          <code key={relationship}>{relationship}</code>
        ))}
      </div>

      <figcaption>
        Four related tables—customers, orders, products and sessions—connect through three
        primary-key and foreign-key relationships before resolving into a learned representation.
      </figcaption>
    </figure>
  );
}
