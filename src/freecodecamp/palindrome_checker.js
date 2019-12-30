function palindrome(str) {
  const ignore_case_cmp = (ascii_a, ascii_b) => {
    const ascii_a_lower = ascii_a > 96 ? ascii_a - 32 : ascii_a
    const ascii_b_lower = ascii_b > 96 ? ascii_b - 32 : ascii_b

    return ascii_a_lower == ascii_b_lower
  }

  const is_special_ascii = ascii => {
    return !(
      (ascii > 47 && ascii < 58) ||
      (ascii > 64 && ascii < 91) ||
      (ascii > 96 && ascii < 123)
    )
  }

  let lft = 0
  let rht = str.length - 1

  while (lft < rht) {
    const lft_ascii = str.charCodeAt(lft)
    const rht_ascii = str.charCodeAt(rht)

    if (is_special_ascii(lft_ascii)) {
      lft++
      continue
    }
    if (is_special_ascii(rht_ascii)) {
      rht--
      continue
    }
    if (ignore_case_cmp(lft_ascii, rht_ascii)) {
      lft++
      rht--
      continue
    } else {
      return false
    }
  }

  return true
}

palindrome("_eye") |> console.log
