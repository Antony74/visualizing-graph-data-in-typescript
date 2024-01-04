import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const NodeGroup = ({
  id,
  title,
  cx,
  cy,
  rx,
  ry,
  y,
}: {
  id: string;
  title: string;
  cx: string;
  cy: string;
  rx: string;
  ry: string;
  y: string;
}) => (
  <g id={id} class="node">
    <title>${title}</title>
    <ellipse fill="none" stroke="black" {...{ cx, cy, rx, ry }} />
    <text
      text-anchor="middle"
      x={cx}
      y={y}
      font-family="Times,serif"
      font-size="14.00"
    >
      {title}
    </text>
  </g>
);

const svg = (
  <svg
    width="421pt"
    height="310pt"
    viewBox="0.00 0.00 420.55 310.40"
    //    xmlns="http://www.w3.org/2000/svg"
    //    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g
      id="graph0"
      class="graph"
      transform="scale(1 1) rotate(0) translate(4 306.4)"
    >
      <title>Example</title>
      <polygon
        fill="white"
        stroke="transparent"
        points="-4,4 -4,-306.4 416.55,-306.4 416.55,4 -4,4"
      />
      <NodeGroup
        id="node1"
        title="loose&#45;envify"
        cx="59.3"
        cy="-195.6"
        rx="59.11"
        ry="18"
        y="-191.4"
      />
      <text text-anchor="middle" x="59.3" y="-191.4" />
      <g id="node2" class="node">
        <title>react</title>
        <ellipse
          fill="none"
          stroke="black"
          cx="79.3"
          cy="-106.8"
          rx="29.59"
          ry="18"
        />
        <text
          text-anchor="middle"
          x="79.3"
          y="-102.6"
          font-family="Times,serif"
          font-size="14.00"
        >
          react
        </text>
      </g>
      <g id="edge1" class="edge">
        <title>loose&#45;envify&#45;&gt;react</title>
        <path
          fill="none"
          stroke="black"
          d="M63.26,-177.45C66.05,-165.32 69.85,-148.82 73.06,-134.92"
        />
        <polygon
          fill="black"
          stroke="black"
          points="76.53,-135.44 75.36,-124.91 69.71,-133.87 76.53,-135.44"
        />
        <text
          text-anchor="middle"
          x="74.8"
          y="-147"
          font-family="Times,serif"
          font-size="14.00"
        >
          1
        </text>
      </g>
      <g id="node3" class="node">
        <title>react&#45;dom</title>
        <ellipse
          fill="none"
          stroke="black"
          cx="180.3"
          cy="-106.8"
          rx="50.36"
          ry="18"
        />
        <text
          text-anchor="middle"
          x="180.3"
          y="-102.6"
          font-family="Times,serif"
          font-size="14.00"
        >
          react&#45;dom
        </text>
      </g>
      <g id="edge2" class="edge">
        <title>loose&#45;envify&#45;&gt;react&#45;dom</title>
        <path
          fill="none"
          stroke="black"
          d="M81.5,-178.68C100.81,-164.83 128.96,-144.63 150.28,-129.34"
        />
        <polygon
          fill="black"
          stroke="black"
          points="152.57,-132 158.66,-123.33 148.49,-126.31 152.57,-132"
        />
        <text
          text-anchor="middle"
          x="134.8"
          y="-147"
          font-family="Times,serif"
          font-size="14.00"
        >
          2
        </text>
      </g>
      <g id="node8" class="node">
        <title>react&#45;redux</title>
        <ellipse
          fill="none"
          stroke="black"
          cx="180.3"
          cy="-18"
          rx="54.99"
          ry="18"
        />
        <text
          text-anchor="middle"
          x="180.3"
          y="-13.8"
          font-family="Times,serif"
          font-size="14.00"
        >
          react&#45;redux
        </text>
      </g>
      <g id="edge6" class="edge">
        <title>react&#45;&gt;react&#45;redux</title>
        <path
          fill="none"
          stroke="black"
          d="M95.98,-91.47C111.63,-78.02 135.29,-57.69 153.57,-41.98"
        />
        <polygon
          fill="black"
          stroke="black"
          points="156.24,-44.3 161.54,-35.13 151.68,-38.99 156.24,-44.3"
        />
        <text
          text-anchor="middle"
          x="142.8"
          y="-58.2"
          font-family="Times,serif"
          font-size="14.00"
        >
          1
        </text>
      </g>
      <g id="edge7" class="edge">
        <title>react&#45;dom&#45;&gt;react&#45;redux</title>
        <path
          fill="none"
          stroke="black"
          d="M180.3,-88.65C180.3,-76.52 180.3,-60.02 180.3,-46.12"
        />
        <polygon
          fill="black"
          stroke="black"
          points="183.8,-46.11 180.3,-36.11 176.8,-46.11 183.8,-46.11"
        />
        <text
          text-anchor="middle"
          x="183.8"
          y="-58.2"
          font-family="Times,serif"
          font-size="14.00"
        >
          1
        </text>
      </g>
      <g id="node4" class="node">
        <title>scheduler</title>
        <ellipse
          fill="none"
          stroke="black"
          cx="184.3"
          cy="-195.6"
          rx="48.07"
          ry="18"
        />
        <text
          text-anchor="middle"
          x="184.3"
          y="-191.4"
          font-family="Times,serif"
          font-size="14.00"
        >
          scheduler
        </text>
      </g>
      <g id="edge3" class="edge">
        <title>scheduler&#45;&gt;react&#45;dom</title>
        <path
          fill="none"
          stroke="black"
          d="M183.51,-177.45C182.96,-165.32 182.2,-148.82 181.55,-134.92"
        />
        <polygon
          fill="black"
          stroke="black"
          points="185.05,-134.74 181.09,-124.91 178.06,-135.06 185.05,-134.74"
        />
        <text
          text-anchor="middle"
          x="185.8"
          y="-147"
          font-family="Times,serif"
          font-size="14.00"
        >
          1
        </text>
      </g>
      <g id="node5" class="node">
        <title>regenerator&#45;runtime</title>
        <ellipse
          fill="none"
          stroke="black"
          cx="324.3"
          cy="-284.4"
          rx="88.5"
          ry="18"
        />
        <text
          text-anchor="middle"
          x="324.3"
          y="-280.2"
          font-family="Times,serif"
          font-size="14.00"
        >
          regenerator&#45;runtime
        </text>
      </g>
      <g id="node6" class="node">
        <title>@babel/runtime</title>
        <ellipse
          fill="none"
          stroke="black"
          cx="324.3"
          cy="-195.6"
          rx="73.63"
          ry="18"
        />
        <text
          text-anchor="middle"
          x="324.3"
          y="-191.4"
          font-family="Times,serif"
          font-size="14.00"
        >
          @babel/runtime
        </text>
      </g>
      <g id="edge4" class="edge">
        <title>regenerator&#45;runtime&#45;&gt;@babel/runtime</title>
        <path
          fill="none"
          stroke="black"
          d="M324.3,-266.25C324.3,-254.12 324.3,-237.62 324.3,-223.72"
        />
        <polygon
          fill="black"
          stroke="black"
          points="327.8,-223.71 324.3,-213.71 320.8,-223.71 327.8,-223.71"
        />
        <text
          text-anchor="middle"
          x="327.8"
          y="-235.8"
          font-family="Times,serif"
          font-size="14.00"
        >
          1
        </text>
      </g>
      <g id="node7" class="node">
        <title>redux</title>
        <ellipse
          fill="none"
          stroke="black"
          cx="302.3"
          cy="-106.8"
          rx="33.05"
          ry="18"
        />
        <text
          text-anchor="middle"
          x="302.3"
          y="-102.6"
          font-family="Times,serif"
          font-size="14.00"
        >
          redux
        </text>
      </g>
      <g id="edge5" class="edge">
        <title>@babel/runtime&#45;&gt;redux</title>
        <path
          fill="none"
          stroke="black"
          d="M319.96,-177.45C316.88,-165.32 312.7,-148.82 309.18,-134.92"
        />
        <polygon
          fill="black"
          stroke="black"
          points="312.49,-133.75 306.64,-124.91 305.71,-135.47 312.49,-133.75"
        />
        <text
          text-anchor="middle"
          x="317.8"
          y="-147"
          font-family="Times,serif"
          font-size="14.00"
        >
          1
        </text>
      </g>
      <g id="edge8" class="edge">
        <title>redux&#45;&gt;react&#45;redux</title>
        <path
          fill="none"
          stroke="black"
          d="M282.97,-92.05C263.55,-78.23 233.33,-56.73 210.7,-40.63"
        />
        <polygon
          fill="black"
          stroke="black"
          points="212.61,-37.69 202.44,-34.75 208.56,-43.4 212.61,-37.69"
        />
        <text
          text-anchor="middle"
          x="254.8"
          y="-58.2"
          font-family="Times,serif"
          font-size="14.00"
        >
          1
        </text>
      </g>
    </g>
  </svg>
);

root.render(svg);
