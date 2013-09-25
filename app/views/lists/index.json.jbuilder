json.array!(@lists) do |list|
  json.extract! list, :task, :complete
  json.url list_url(list, format: :json)
end
