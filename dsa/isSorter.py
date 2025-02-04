def check(nums):
    count = 0

    for i in range(len(nums)):
        print(i)
        if nums[i] > nums[(i + 1) % len(nums)]:
            count += 1

        if count > 1:
            return False

    return True

print(check([2, 1, 3, 4]))
