import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { VictoryArea, VictoryBar, VictoryCandlestick, VictoryChart, VictoryGroup, VictoryLine, VictoryPie, VictoryScatter, VictoryStack } from 'victory-native';
import styles, { getStyles } from './Styles/Chart';
export { candleData, random, range, getYFunction, generateRandomData, getTransitionData } from '../services/ChartData';

export const DataVisualization = () => {
  const [y, setY] = useState(getYFunction());
  const [style, setStyle] = useState(getStyles());
  const [transitionData, setTransitionData] = useState(getTransitionData());
  const [randomData, setRandomData] = useState(generateRandomData());

  useEffect(() => {
    setInterval(() => {
      setY(getYFunction());
      setStyle(getStyles());
      setTransitionData(getTransitionData());
      setRandomData(generateRandomData());
    }, 3000);
  },[y, style,transitionData,randomData])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>{"<VictoryPie/>"}</Text>
      <VictoryPie
        innerRadius={75}
        data={randomData}
        animate={{ duration: 1500 }}
      />

      <VictoryPie
        style={{
          labels: {
            fontSize: 15,
            padding: 75
          }
        }}
      />
      <VictoryPie
        style={{
          data: {
            stroke: "none",
            opacity: 0.3
          }
        }}
      />
      <VictoryPie innerRadius={90} />
      <VictoryPie
        endAngle={90}
        startAngle={-90}
      />
      <VictoryPie
        endAngle={90}
        innerRadius={90}
        padAngle={5}
        startAngle={-90}
      />
      <VictoryPie
        style={{
          labels: {
            fill: "white",
            stroke: "none",
            fontSize: 10,
            fontWeight: "bold"
          }
        }}
        data={[
          { x: "<5", y: 6279 },
          { x: "5-13", y: 9182 },
          { x: "14-17", y: 5511 },
          { x: "18-24", y: 7164 },
          { x: "25-44", y: 6716 },
          { x: "45-64", y: 4263 },
          { x: "≥65", y: 7502 }
        ]}
        innerRadius={70}
        colorScale={[
          "#D85F49",
          "#F66D3B",
          "#D92E1D",
          "#D73C4C",
          "#FFAF59",
          "#E28300",
          "#F6A57F"
        ]}
      />
      <VictoryPie
        style={{
          data: {
            stroke: (data) => data.y > 75 ? "black" : "none",
            opacity: (data) => data.y > 75 ? 1 : 0.4
          }
        }}
        data={[
          { x: "Cat", y: 62 },
          { x: "Dog", y: 91 },
          { x: "Fish", y: 55 },
          { x: "Bird", y: 55 }
        ]}
      />

      <Text style={styles.text}>{"<VictoryChart/>"}</Text>

      <VictoryChart><VictoryBar /><VictoryLine /></VictoryChart>

      <VictoryChart><VictoryCandlestick data={candleData} /></VictoryChart>

      <VictoryChart domain={{ x: [0, 4] }}>
        <VictoryGroup
          labels={["a", "b", "c"]}
          offset={10}
          colorScale={"qualitative"}
        >
          <VictoryBar
            data={[
              { x: 1, y: 1 },
              { x: 2, y: 2 },
              { x: 3, y: 5 }
            ]}
          />
          <VictoryBar
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 1 },
              { x: 3, y: 7 }
            ]}
          />
          <VictoryBar
            data={[
              { x: 1, y: 3 },
              { x: 2, y: 4 },
              { x: 3, y: 9 }
            ]}
          />
        </VictoryGroup>
      </VictoryChart>

      <VictoryChart>
        <VictoryScatter
          data={[
            {
              x: 1, y: 3, fill: "red",
              symbol: "plus", size: 6, label: "Red"
            },
            {
              x: 2, y: 5, fill: "magenta",
              size: 9, opacity: 0.4, label: "Magenta"
            },
            {
              x: 3, y: 4, fill: "orange",
              size: 5, label: "Orange"
            },
            {
              x: 4, y: 2, fill: "brown",
              symbol: "square", size: 6, label: "Brown"
            },
            {
              x: 5, y: 5, fill: "black",
              symbol: "triangleUp", size: 5, label: "Black"
            }
          ]}
        />
      </VictoryChart>

      <VictoryChart animate={{ duration: 1500 }}>
        <VictoryBar
          data={transitionData}
          style={{
            data: {
              fill: "tomato", width: 12
            }
          }}
          animate={{
            onExit: {
              duration: 500,
              before: () => ({
                y: 0,
                fill: "orange",
                label: "BYE"
              })
            }
          }}
        />
      </VictoryChart>

      <VictoryChart>
        <VictoryStack>
          <VictoryArea
            data={[
              { x: "a", y: 2 }, { x: "b", y: 3 }, { x: "c", y: 5 }, { x: "d", y: 4 }, { x: "e", y: 7 }
            ]}
          />
          <VictoryArea
            data={[
              { x: "a", y: 1 }, { x: "b", y: 4 }, { x: "c", y: 5 }, { x: "d", y: 7 }, { x: "e", y: 5 }
            ]}
          />
          <VictoryArea
            data={[
              { x: "a", y: 3 }, { x: "b", y: 2 }, { x: "c", y: 6 }, { x: "d", y: 2 }, { x: "e", y: 6 }
            ]}
          />
          <VictoryArea
            data={[
              { x: "a", y: 2 }, { x: "b", y: 3 }, { x: "c", y: 3 }, { x: "d", y: 4 }, { x: "e", y: 7 }
            ]}
          />
        </VictoryStack>
      </VictoryChart>

      <Text style={styles.text}>{"<VictoryLine />"}</Text>

      <VictoryLine />

      <VictoryLine
        data={[
          { x: 0, y: 1 },
          { x: 1, y: 3 },
          { x: 2, y: 2 },
          { x: 3, y: 4 },
          { x: 4, y: 3 },
          { x: 5, y: 5 }
        ]}
      />

      <VictoryLine
        data={[
          { amount: 1, yield: 1, error: 0.5 },
          { amount: 2, yield: 2, error: 1.1 },
          { amount: 3, yield: 3, error: 0 },
          { amount: 4, yield: 2, error: 0.1 },
          { amount: 5, yield: 1, error: 1.5 }
        ]}
        x={"amount"}
        y={(data) => (data.yield + data.error)}
      />

      <VictoryLine y={(data) => Math.sin(2 * Math.PI * data.x)} />

      <VictoryLine
        height={300}
        domain={[0, 5]}
        padding={75}
        data={[
          { x: 0, y: 1 },
          { x: 1, y: 3 },
          { x: 2, y: 2 },
          { x: 3, y: 4 },
          { x: 4, y: 3 },
          { x: 5, y: 5 }
        ]}
        interpolation="cardinal"
        label="LINE"
        style={{
          data: {
            stroke: "#822722",
            strokeWidth: 3
          },
          labels: { fontSize: 12 }
        }}
      />

      <VictoryLine
        width={300}
        style={{
          data: {
            stroke: (data) => {
              const y = data.map((d) => d.y);
              return Math.max(...y) > 2 ?
                "red" : "blue";
            }
          }
        }}
        data={[
          { x: 0, y: 1 },
          { x: 1, y: 3 },
          { x: 2, y: 2 },
          { x: 3, y: 4 },
          { x: 4, y: 3 },
          { x: 5, y: 5 }
        ]}
      />

      <VictoryLine
        style={{
          data: { stroke: "red", strokeWidth: 9 }
        }}
        interpolation={"linear"}
        data={[
          { x: 0, y: 1 },
          { x: 1, y: 3 },
          { x: 2, y: 2 },
          { x: 3, y: 4 },
          { x: 4, y: 3 },
          { x: 5, y: 5 }
        ]}
      />

      <VictoryLine
        style={{ data: style }}
        interpolation="basis"
        animate={{ duration: 1500 }}
        y={y}
      />

      <Text style={styles.text}>{"<VictoryArea />"}</Text>

      <VictoryArea />

      <VictoryArea
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 1 },
          { x: 5, y: 3 },
          { x: 6, y: 4 },
          { x: 7, y: 2 }
        ]}
      />

      <VictoryArea
        data={[
          { amount: 1, yield: 1, error: 0.5 },
          { amount: 2, yield: 2, error: 1.1 },
          { amount: 3, yield: 3, error: 0 },
          { amount: 4, yield: 2, error: 0.1 },
          { amount: 5, yield: 1, error: 1.5 }
        ]}
        x={"amount"}
        y={(data) => (data.yield + data.error)}
      />

      <VictoryGroup
        width={300}
        height={375}
        style={{ data: { opacity: 0.3 } }}
      >
        <VictoryArea
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 3 }
          ]}
        />
        <VictoryArea
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 1 },
            { x: 3, y: 1 }
          ]}
        />
        <VictoryArea
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 4 },
            { x: 3, y: 2 }
          ]}
        />
      </VictoryGroup>

      <VictoryStack
        width={300}
        height={375}
      >
        <VictoryArea
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 3 }
          ]}
        />
        <VictoryArea
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 1 },
            { x: 3, y: 1 }
          ]}
        />
        <VictoryArea
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 4 },
            { x: 3, y: 2 }
          ]}
        />
      </VictoryStack>

      <VictoryStack
        width={300}
        height={450}
        style={{
          data: {
            strokeDasharray: "5,5",
            strokeWidth: 2,
            fillOpacity: 0.4
          }
        }}
      >
        <VictoryArea
          style={{
            data: {
              fill: "tomato", stroke: "tomato"
            }
          }}
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 3 }
          ]}
        />
        <VictoryArea
          style={{
            data: {
              fill: "orange", stroke: "orange"
            }
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 1 },
            { x: 3, y: 1 }
          ]}
        />
        <VictoryArea
          style={{
            data: {
              fill: "gold", stroke: "gold"
            }
          }}
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 4 },
            { x: 3, y: 2 }
          ]}
        />
      </VictoryStack>

      <Text style={styles.text}>{"<VictoryBar />"}</Text>

      <VictoryBar />

      <VictoryBar
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 }
        ]}
      />

      <VictoryGroup
        width={300}
        height={375}
        offset={20}
        colorScale={"qualitative"}
      >
        <VictoryBar
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 3 }
          ]}
        />
        <VictoryBar
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 1 },
            { x: 3, y: 1 }
          ]}
        />
        <VictoryBar
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 4 },
            { x: 3, y: 2 }
          ]}
        />
      </VictoryGroup>

      <VictoryStack
        width={300}
        height={375}
        colorScale={"qualitative"}
      >
        <VictoryBar
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 3 }
          ]}
        />
        <VictoryBar
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 1 },
            { x: 3, y: 1 }
          ]}
        />
        <VictoryBar
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 4 },
            { x: 3, y: 2 }
          ]}
        />
      </VictoryStack>

      <VictoryBar
        height={375}
        padding={75}
        style={{
          data: {
            fill: (data) => data.y > 2 ? "red" : "blue"
          }
        }}
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 }
        ]}
      />

      <Text style={styles.text}>{"<VictoryScatter />"}</Text>
    </ScrollView>
  );
}
export default DataVisualization;
