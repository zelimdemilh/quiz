import { useState, useMemo } from "react";
import { Input } from "antd";
import { Loader, Page, TestList } from "../../components";
import { useGetAllTestsQuery } from "../../sevices";

export const AllTests = () => {
  const { data: tests, isLoading } = useGetAllTestsQuery();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTests = useMemo(() => {
    if (!tests) return [];
    return tests.filter((test) =>
      test.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [tests, searchTerm]);

  return (
    <Page title="Пройти тест">
      <Input.Search
        placeholder="Поиск тестов..."
        allowClear
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      {isLoading ? <Loader /> : <TestList tests={filteredTests} />}
    </Page>
  );
};
