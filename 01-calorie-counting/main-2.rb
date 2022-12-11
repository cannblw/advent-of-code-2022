input = File.open('input.txt').read

print input
  .split("\n\n")
  .map { |item| item.split.map(&:to_i).sum }
  .sort
  .last(3)
  .sum
