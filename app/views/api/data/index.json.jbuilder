words = @unique_words.keys

words.each do |word|
  json.set! word do
    json.repeats @unique_words[word]
  end
end
