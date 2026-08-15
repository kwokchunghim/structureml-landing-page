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
      <div className="schema-card-heading">
        <span className="schema-icon" aria-hidden="true" />
        <h3>{table.name}</h3>
      </div>
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
      data-animation-state="sequenced"
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
            d="M 326.8 127.1 C 337 127.1, 342 140.6, 353 140.6"
            pathLength="1"
          />
          <path
            className="relationship-path path-product-orders"
            d="M 647 167.7 H 675 V 375.3 H 647"
            pathLength="1"
          />
          <path
            className="relationship-path path-customer-sessions"
            d="M 32.8 402.4 H 14 V 127.1 H 32.8"
            pathLength="1"
          />
          <path
            className="representation-path"
            d="M 675 260 C 710 260, 720 260, 753.3 260"
            pathLength="1"
          />

          <circle className="diagram-signal signal-customer-orders" cx="353" cy="140.6" r="4" />
          <circle className="diagram-signal signal-product-orders" cx="647" cy="167.7" r="4" />
          <circle className="diagram-signal signal-customer-sessions" cx="32.8" cy="402.4" r="4" />
          <circle className="diagram-signal signal-representation" cx="675" cy="260" r="4" />
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
