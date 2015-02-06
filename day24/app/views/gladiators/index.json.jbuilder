json.array!(@gladiators) do |gladiator|
  json.extract! gladiator, :id, :name, :hp, :damage
  json.url gladiator_url(gladiator, format: :json)
end
