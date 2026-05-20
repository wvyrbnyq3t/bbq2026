import { FormField, FormText, FormTextarea } from "./components/Form";
import {
  Page,
  PageHeader,
  PageHeaderTitle,
  PageFooter,
  PageContent,
} from "./components/PageLayout";
import { Container, ContainerTitle } from "./components/Container";
import { useState } from "react";
import { Button } from "./components/Button";

const GAS_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxHEp0knnuxASRUKloCo22_zH8Lh5CJVKdSKlnwteJy0rmxUG_S1SGuxBQN5ktbKVFG/exec";

const App = () => {
  const handleSubmit = async () => {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      const response = await fetch(GAS_WEB_APP_URL, {
        method: "POST",
        body: JSON.stringify({
          data,
        }),
      });

      const result = await response.json();

      if (!result.ok) {
        throw new Error(result.message ?? "送信に失敗しました");
      }

      alert("送信しました");
    } catch (error) {
      console.error(error);
      alert("送信に失敗しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState([
    {
      id: "nani_kangaeteirukawarazaranaihito",
      title: "何考えているかわからない人ランキング",
      items: [
        {
          id: "nani_kangaeteirukawarazaranaihito_1",
          label: "1位",
          value: "",
        },
        {
          id: "nani_kangaeteirukawarazaranaihito_2",
          label: "2位",
          value: "",
        },
        {
          id: "nani_kangaeteirukawarazaranaihito_3",
          label: "3位",
          value: "",
        },
      ],
      comment: "",
    },
    {
      id: "sugukakomonkuresouna",
      title: "過去問をくれそうな人ランキング",
      items: [
        {
          id: "sugukakomonkuresouna_1",
          label: "1位",
          value: "",
        },
        {
          id: "sugukakomonkuresouna_2",
          label: "2位",
          value: "",
        },
        {
          id: "sugukakomonkuresouna_3",
          label: "3位",
          value: "",
        },
      ],
      comment: "",
    },
    {
      id: "ichihira_soba_yoku_itte_sou na_hito",
      title: "一平そばによく行ってそうな人ランキング",
      items: [
        {
          id: "ichihira_soba_yoku_itte_sou na_hito_1",
          label: "1位",
          value: "",
        },
        {
          id: "ichihira_soba_yoku_itte_sou na_hito_2",
          label: "2位",
          value: "",
        },
        {
          id: "ichihira_soba_yoku_itte_sou na_hito_3",
          label: "3位",
          value: "",
        },
      ],
      comment: "",
    },
    {
      title: "後輩に舐められそうな人ランキング",
      id: "kouhai_ni_namerare_souna_hito",
      items: [
        {
          id: "kouhai_ni_namerare_souna_hito_1",
          label: "1位",
          value: "",
        },
        {
          id: "kouhai_ni_namerare_souna_hito_2",
          label: "2位",
          value: "",
        },
        {
          id: "kouhai_ni_namerare_souna_hito_3",
          label: "3位",
          value: "",
        },
      ],
      comment: "",
    },
    {
      title: "一人暮らし向いてなさそうな人ランキング",
      id: "hitorigurashi_muite_nasousouna_hito",
      items: [
        {
          id: "hitorigurashi_muite_nasousouna_hito_1",
          label: "1位",
          value: "",
        },
        {
          id: "hitorigurashi_muite_nasousouna_hito_2",
          label: "2位",
          value: "",
        },
        {
          id: "hitorigurashi_muite_nasousouna_hito_3",
          label: "3位",
          value: "",
        },
      ],
      comment: "",
    },
    {
      title: "男性で結婚できそうな人ランキング",
      id: "dansei_de_kekkon_deki_souna_hito",
      items: [
        {
          id: "dansei_de_kekkon_deki_souna_hito_1",
          label: "1位",
          value: "",
        },
        {
          id: "dansei_de_kekkon_deki_souna_hito_2",
          label: "2位",
          value: "",
        },
        {
          id: "dansei_de_kekkon_deki_souna_hito_3",
          label: "3位",
          value: "",
        },
      ],
      comment: "",
    },
    {
      title: "女性で結婚できそうな人ランキング",
      id: "josei_de_kekkon_deki_souna_hito",
      items: [
        {
          id: "josei_de_kekkon_deki_souna_hito_1",
          label: "1位",
          value: "",
        },
        {
          id: "josei_de_kekkon_deki_souna_hito_2",
          label: "2位",
          value: "",
        },
        {
          id: "josei_de_kekkon_deki_souna_hito_3",
          label: "3位",
          value: "",
        },
      ],
      comment: "",
    },
    {
      title: "2年生でGPAが低そうな人ランキング",
      id: "ninen_sei_de_gpa_ga_hisousouna_hito",
      items: [
        {
          id: "ninen_sei_de_gpa_ga_hisousouna_hito_1",
          label: "1位",
          value: "",
        },
        {
          id: "ninen_sei_de_gpa_ga_hisousouna_hito_2",
          label: "2位",
          value: "",
        },
        {
          id: "ninen_sei_de_gpa_ga_hisousouna_hito_3",
          label: "3位",
          value: "",
        },
      ],
      comment: "",
    },
    {
      title: "3年生でGPAが低そうな人ランキング",
      id: "sannen_sei_de_gpa_ga_hisousouna_hito",
      items: [
        {
          id: "sannen_sei_de_gpa_ga_hisousouna_hito_1",
          label: "1位",
          value: "",
        },
        {
          id: "sannen_sei_de_gpa_ga_hisousouna_hito_2",
          label: "2位",
          value: "",
        },
        {
          id: "sannen_sei_de_gpa_ga_hisousouna_hito_3",
          label: "3位",
          value: "",
        },
      ],
      comment: "",
    },
    {
      title: "4年生でGPAが低そうな人ランキング",
      id: "yonen_sei_de_gpa_ga_hisousouna_hito",
      items: [
        {
          id: "yonen_sei_de_gpa_ga_hisousouna_hito_1",
          label: "1位",
          value: "",
        },
        {
          id: "yonen_sei_de_gpa_ga_hisousouna_hito_2",
          label: "2位",
          value: "",
        },
        {
          id: "yonen_sei_de_gpa_ga_hisousouna_hito_3",
          label: "3位",
          value: "",
        },
      ],
      comment: "",
    },
  ]);
  return (
    <Page>
      <PageHeader position="sticky">
        <PageHeaderTitle>新歓BBQ 印象ランキング</PageHeaderTitle>
      </PageHeader>
      <PageContent>
        {data.map((d, index) => (
          <>
            <Container key={d.id}>
              <ContainerTitle level={2}>{d.title}</ContainerTitle>
              <FormField>
                {d.items.map((item, itemIndex) => (
                  <div
                    key={item.id}
                    style={{
                      display: "grid block",
                      alignContent: "center",
                      gap: "var(--pdng-md)",
                      gridTemplateColumns: "max-content 6fr",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.5em",
                        flexWrap: "wrap",
                        display: "flex block",
                        alignContent: "center",
                      }}
                    >
                      <p>{item.label}</p>
                    </div>
                    <FormText
                      value={data[index].items[itemIndex].value}
                      id={data[index].items[itemIndex].id}
                      onChange={(e) => {
                        setData((prev) => {
                          const newData = [...prev];
                          newData[index].items[itemIndex].value =
                            e.target.value;
                          return newData;
                        });
                      }}
                    />
                  </div>
                ))}
                <div style={{ marginTop: "var(--pdng-md)" }}>
                  <p>このランキングの理由を教えてください</p>
                  <FormTextarea
                    value={data[index].comment}
                    onChange={(e) => {
                      setData((prev) => {
                        const newData = [...prev];
                        newData[index].comment = e.target.value;
                        return newData;
                      });
                    }}
                  />
                </div>
              </FormField>
            </Container>
            <hr />
          </>
        ))}
      </PageContent>
      <PageFooter>
        <Button
          type="button"
          variant="primary"
          className="u-width--full"
          onClick={handleSubmit}
          disabled={
            isSubmitting ||
            data.some((d) => d.items.some((item) => item.value === ""))
          }
        >
          {isSubmitting ? "送信中..." : "送信する"}
        </Button>
      </PageFooter>
    </Page>
  );
};

export default App;
