class Log_data < ActiveRecord::Base
  def self.transform(raw_data)
    dictionary = {}
    i = 1
    while i < raw_data.length
      data = JSON.parse(raw_data[i].data)

      if data["obs"]["type"] == "speech"
        words = data["obs"]["utterance"].split(" ")
        words.each do |word|
          cleansed = word.gsub(/[^a-z ]/i, '')
          if cleansed.length > 0 && cleansed.length < 20
            if dictionary[cleansed]
              dictionary[cleansed] += 1
            else
              dictionary[cleansed] = 1
            end
          end
        end
      end
    i+=1
    end
    dictionary
  end
end
