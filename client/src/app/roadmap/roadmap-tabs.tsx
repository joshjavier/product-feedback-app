"use client";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FeedbackList from "./feedback-list";
import { Request } from "product-feedback";
import { useResizeDetector } from "react-resize-detector";
import { useCallback, useState } from "react";

import "./roadmap-tabs.css";

interface RoadmapTabsProps {
  total: Record<string, number>;
  items: Record<string, Request[]>;
}

export default function RoadmapTabs({ total, items }: RoadmapTabsProps) {
  const [isTabbed, setTabbed] = useState(false);

  const onResize = useCallback(() => {
    if (window.innerWidth < 768) {
      setTabbed(true);
    } else {
      setTabbed(false);
    }
  }, []);

  const { ref } = useResizeDetector({ handleHeight: false, onResize });

  return (
    <div ref={ref}>
      <Tabs forceRenderTabPanel={!isTabbed}>
        <TabList className="md:hidden flex border-b border-b-bali-hai/25 -mx-6 sm:-mx-10">
          <Tab
            style={
              { "--tab-color": "var(--color-tacao" } as React.CSSProperties
            }
          >
            Planned ({total.planned})
          </Tab>
          <Tab
            style={
              {
                "--tab-color": "var(--color-electric-violet)",
              } as React.CSSProperties
            }
          >
            In-Progress ({total["in-progress"]})
          </Tab>
          <Tab
            style={
              { "--tab-color": "var(--color-malibu)" } as React.CSSProperties
            }
          >
            Live ({total.live})
          </Tab>
        </TabList>

        <div className="mt-6 sm:mt-8 lg:mt-12 md:grid grid-cols-3 gap-2.5 lg:gap-[30]">
          <TabPanel>
            <FeedbackList
              title="Planned"
              total={total.planned}
              description="Ideas prioritized for research"
              items={items.planned}
            />
          </TabPanel>
          <TabPanel>
            <FeedbackList
              title="In-Progress"
              total={total["in-progress"]}
              description="Features currently being developed"
              items={items["in-progress"]}
            />
          </TabPanel>
          <TabPanel>
            <FeedbackList
              title="Live"
              total={total.live}
              description="Released features"
              items={items.live}
            />
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
}
